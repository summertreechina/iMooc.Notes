<?php
/**
 * DEMO文件. 展示基于Telnet协议的数据传输
 *
 * 批量监控集群中的日志
 * Created by Lane
 * User: lane
 * Date: 16/4/16
 * Time: 下午10:05
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

//引入MeepoPS
require_once '../../MeepoPS/index.php';

//使用文本传输的Api类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//启动的子进程数量. 通常为CPU核心数
$telnet->childProcessCount = 1;

//设置MeepoPS实例名称
$telnet->instanceName = 'MonitorLog-Telnet';

//设置回调函数 - 这是所有应用的业务代码入口
$telnet->callbackConnect = 'callbackConnect';

//启动MeepoPS
\MeepoPS\runMeepoPS();

//以下为回调函数, 业务相关.
function callbackConnect($connect){
    $ipList = array(
        '10.10.10.1',
        '10.10.10.2',
        '10.10.10.3',
        '10.10.10.4',
    );
    $username = 'lane';
    $password = '123456';
    $cmd = 'tail -f /data/logs/error.log';
    $streamList = array();
    foreach($ipList as $ip){
        $ssh = ssh2_connect($ip, 22);
        if (!$ssh){
            echo 'Connection failed: ' . $ip;
            return;
        }
        ssh2_auth_password($ssh, $username, $password);
        $stream = ssh2_exec($ssh, $cmd);
        stream_set_blocking($stream, true);
        $streamList[] = $stream;
    }
    $connect->send("链接完成\n");
    while(true){
        foreach($streamList as $key=>$stream){
            $ip = $ipList[$key];
            $content = @fgets($stream);
            if(!$content){
                continue;
            }
            $connect->send($ip . ': ' . $content);
        }
    }
}