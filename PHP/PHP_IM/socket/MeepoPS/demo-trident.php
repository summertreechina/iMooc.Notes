<?php
/**
 * DEMO文件. 使用基于三层网络模型的Telnet协议的数据传输
 * producer - consumer
 * Created by Lane
 * User: lane
 * Date: 16/4/16
 * Time: 下午10:05
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用基于三层网络模型的文本传输的Api类
$trident = new \MeepoPS\Api\Trident('telnet', '0.0.0.0', '19910');

$trident->confluenceIp = '0.0.0.0';
$trident->confluencePort = '19911';
$trident->confluenceInnerIp = '127.0.0.1';
$trident->instanceName = 'MeepoPS-Trident-Transfer';

$trident->transferInnerIp = '0.0.0.0';
$trident->transferInnerPort = '19912';
$trident->childProcessCount = 3;

$trident->businessChildProcessCount = 3;

$trident->callbackStartInstance = function(){
    var_dump('实例启动');
};
$trident->callbackConnect = function(){
    var_dump('新链接');
};
$trident->callbackConnectClose = function(){
    var_dump('连接断开');
};
$trident->callbackInstanceStop = function(){
    var_dump('实例停止');
};

//例如客户端消息格式: {"type":"SEND_ALL", "content":"hello world"}
//例如客户端消息格式: {"type":"SEND_ONE", "content":"zai ma ?", "send_to_one":"MC4wLjAuMF8xOTkxM183"}
$trident->callbackNewData = function($connect, $data){
    var_dump('用户' . $_SERVER['MEEPO_PS_CLIENT_UNIQUE_ID'] . '发消息啦');
    $data = json_decode($data, true);
    if(empty($data['type'])){
        return;
    }
    $data['type'] = strtoupper($data['type']);
     switch($data['type']){
         case 'SEND_ALL':
             if(empty($data['content'])){
                 return;
             }
             $message = '收到群发消息: ' . $data['content'];
             \MeepoPS\Core\Trident\AppBusiness::sendToAll($message);
             break;
         case 'SEND_ONE':
             $message = '收到私聊消息: ' . $data['content'] . '(From: ' . $_SERVER['MEEPO_PS_CLIENT_UNIQUE_ID'] . ')';
             $clientId = $data['send_to_one'];
             \MeepoPS\Core\Trident\AppBusiness::sendToOne($message, $clientId);
             break;
         default:
             return;
     }
};

//启动三层模型
$trident->run();

//启动MeepoPS
\MeepoPS\runMeepoPS();