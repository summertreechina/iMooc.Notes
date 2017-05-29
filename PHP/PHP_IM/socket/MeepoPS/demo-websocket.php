<?php
/**
 * DEMO文件. 展示基于WebSocket协议的后端程序
 * Created by Lane
 * User: lane
 * Date: 16/6/15
 * Time: 下午4:30
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用WebSocket协议传输的Api类
$webSocket = new \MeepoPS\Api\Websocket('0.0.0.0', '19910');

//启动的子进程数量. 通常为CPU核心数
$webSocket->childProcessCount = 1;

//设置MeepoPS实例名称
$webSocket->instanceName = 'MeepoPS-WebSocket';

$webSocket->callbackNewData = 'callbackNewData';

//启动MeepoPS
\MeepoPS\runMeepoPS();

function callbackNewData($connect, $data){
    $msg = $connect->id . ': ' . $data;
    foreach($connect->instance->clientList as $client){
        $client->send($msg);
    } 
}