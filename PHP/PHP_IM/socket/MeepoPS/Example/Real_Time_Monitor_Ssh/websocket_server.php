<?php
/**
 * WebSocket负责实时收集数据
 * Created by Lane
 * User: lane
 * Date: 16/6/22
 * Time: 下午6:20
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

//使用WebSocket协议传输的Api类
$webServer = new \MeepoPS\Api\Websocket('0.0.0.0', '19910');

//启动的子进程数量. 通常为CPU核心数
$webServer->childProcessCount = 1;

//设置MeepoPS实例名称
$webServer->instanceName = 'MeepoPS-WebSocket';
$webServer->callbackNewData = 'callbackNewData';
$webServer->callbackWSDisconnect = function ($connect){
    \MeepoPS\Core\Timer::delOne($connect->business['timer_id']);
};

//以下为回调函数, 业务相关.
function callbackNewData($connect, $data){
    $data = json_decode($data, true);
    if($data['action'] === 'real-time-monitor/memfree'){
        memfree($connect, $data['param']);
    }
}

/**
 * 获取空闲内存
 * @param $connect
 * @param $param
 */
function memfree($connect, $param){
    if(empty($connect->business['ssh']) || !is_resource($connect->business['ssh'])){
        if(true !== _connectServer($connect, $param['ip'], $param['ssh_username'], $param['ssh_password'])){
            return;
        }
    }
    $cmd = 'cat /proc/meminfo | grep "MemFree:"';
    $connect->business['timer_id'] = \MeepoPS\Core\Timer::add('_execCmd', array($connect, $cmd), $param['interval']);
}

/**
 * ssh的方式登陆到服务器上
 * @param $connect
 * @param $ip
 * @param $username
 * @param $password
 * @return bool
 */
function _connectServer($connect, $ip, $username, $password){
    try{
        $ssh = @ssh2_connect($ip, 22);
        if (!$ssh){
            $connect->send(returnJson('', 1, 'Connection failed.'));
            return false;
        }
        if(!@ssh2_auth_password($ssh, $username, $password)){
            $connect->send(returnJson('', 2, 'Auth failed.'));
            return false;
        }
        $connect->business['ssh'] = $ssh;
        return true;
    }catch (\Exception $e){
        $connect->send(returnJson('', 3, 'Connect Exception: ' . json_encode($e)));
        return false;
    }
}

/**
 * 执行命令并发送消息
 * @param $connect
 * @param $cmd
 */
function _execCmd($connect, $cmd){
    try{
        $stream = @ssh2_exec($connect->business['ssh'], $cmd);
        if(!$stream){
            $connect->send(returnJson('', 4, 'ssh2_exec failed.', $connect->business['timer_id']));
        }
        if(!@stream_set_blocking($stream, true)){
            $connect->send(returnJson('', 5, 'stream_set_blocking failed.', $connect->business['timer_id']));
        }
        $string = @fgets($stream, 1000);
        if(!@preg_match('/memfree:(.*)kb/', strtolower($string), $data)){
            $connect->send(returnJson('', 6, 'No field MemFree, or units of measurement is not KB', $connect->business['timer_id']));
            return;
        }
        $connect->send(returnJson(trim($data[1])));
    }catch (\Exception $e){
        $connect->send(returnJson('', 7, 'Exec cmd failed: ' . json_encode($e), $connect->business['timer_id']));
    }
}

/**
 * 将数据整理为JSON
 * 成功时errCode=0
 * 失败时不需要data
 * @param $data string|array
 * @param int $errCode
 * @param string $errMsg
 * @param string $delTimerId
 * @return string
 */
function returnJson($data, $errCode=0, $errMsg='', $delTimerId=0){
    if(intval($delTimerId)){
        \MeepoPS\Core\Timer::delOne($delTimerId);
    }
    return json_encode(
        array('data' => $data, 'errcode' => $errCode, 'errmsg' => $errMsg)
    );
}