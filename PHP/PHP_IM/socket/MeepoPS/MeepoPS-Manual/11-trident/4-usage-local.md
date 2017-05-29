# Trident在本地如何使用
本章是刨析Trident的三层都部署在同一台机器上时, 如何使用。

## 使用方法
使用时调用Trident的接口即可。
```php
//----------引入MeepoPS----------
require_once 'MeepoPS/index.php';

//使用基于三层网络模型的文本传输的Api类。
//Trident类的第一个参数, 是常用接口的名称。比如在之前我们接触过的接口有Telnet、Http、WebSocket等。
//第二个和第三个参数就是监听的IP和端口。这个IP和端口是暴露在外, 给普通用户链接与使用的。
$trident = new \MeepoPS\Api\Trident('telnet', '0.0.0.0', '19910');

//配置Confluence层
$trident->confluenceIp = '0.0.0.0';
$trident->confluencePort = '19911';
$trident->confluenceInnerIp = '127.0.0.1';

//配置Transfer层
$trident->transferInnerIp = '0.0.0.0';
$trident->transferInnerPort = '19912';
$trident->transferChildProcessCount = 3;

//配置Business层
$trident->businessChildProcessCount = 3;

//设置收到新消息后的回调函数。业务逻辑, 自行编写即可
//例如客户端消息格式: {"type":"SEND_ALL", "content":"hello world"}
$trident->callbackNewData = function($connect, $data){
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
```