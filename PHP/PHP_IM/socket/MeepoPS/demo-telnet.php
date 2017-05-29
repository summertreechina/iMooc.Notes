<?php
/**
 * DEMO文件. 展示基于Telnet协议的数据传输
 * Created by Lane
 * User: lane
 * Date: 16/4/16
 * Time: 下午10:05
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本协议传输的Api类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//启动的子进程数量. 通常为CPU核心数
$telnet->childProcessCount = 1;

//设置MeepoPS实例名称
$telnet->instanceName = 'MeepoPS-Telnet';

//设置回调函数 - 这是所有应用的业务代码入口
$telnet->callbackStartInstance = 'callbackStartInstance';
$telnet->callbackConnect = 'callbackConnect';
$telnet->callbackNewData = 'callbackNewData';
$telnet->callbackSendBufferEmpty = 'callbackSendBufferEmpty';
$telnet->callbackInstanceStop = 'callbackInstanceStop';
$telnet->callbackConnectClose = 'callbackConnectClose';

//启动MeepoPS
\MeepoPS\runMeepoPS();


//以下为回调函数, 业务相关.
function callbackStartInstance($instance)
{
    echo '实例' . $instance->instanceName . '成功启动' . "\n";
}

function callbackConnect($connect)
{
    foreach($connect->instance->clientList as $client){
        //上线提示就不用告诉自己了, 对吧!
        if($connect->id != $client->id){
            $client->send('新用户'.$connect->id.'已经上线了.');
        }
    }

    //定时器
//    \MeepoPS\Core\Timer::add(function($connect){
//        $connect->send('PIN广播');
//    }, array($connect), 5, true);

    var_dump('收到新链接. UniqueId=' . $connect->id . "\n");
}

function callbackNewData($connect, $data)
{
    $connect->send('用户' . $connect->id . '说: ' . $data . "\n");
    var_dump('UniqueId=' . $connect->id . '说:' . $data . "\n");
    foreach ($connect->instance->clientList as $client) {
        if ($connect->id != $client->id) {
            $client->send('群发: 用户' . $connect->id . '说: ' . $data . "\n");
        }
    }
}

function callbackSendBufferEmpty($connect)
{
    var_dump('用户' . $connect->id . "的待发送队列已经为空\n");
}

function callbackInstanceStop($instance)
{
    foreach ($instance->clientList as $client) {
        $client->send('服务即将停止.');
    }
}

function clientListClose($connect)
{
    var_dump('UniqueId=' . $connect->id . '断开了' . "\n");
}

function callbackConnectClose($connect)
{
    $connect->send('88');
}
