# Trident在分布式如何使用
本章是刨析Trident的三层都部署在不同机器上时, 如何使用。

## 分布式部署Trident的优势
- 分布式部署的思路, 就像传统Web开发中, 把集群中少量机器只部署Nginx, 用来接收用户的链接。 把集群中大部分的机器用来部署PHP-FPM, 专注处理Nginx从PHP-FPM监听的9000端口发来的数据和业务逻辑。
- 在Trident中, Confluence是管理中心, 用来调度Transfer和Business。完全没有压力和瓶颈。集群中一共有多少台机器, Confluence就有多少个链接。对于轻松维持百万链接的MeepoPS来说, 集群所产生的链接数能有多大? 所以Confluence一台机器即可。
- 在Trident中, Transfer只负责接收链接和转发数据, 不处理任何的业务逻辑, 类似Nginx。没有业务逻辑的时延、阻塞和大量运算, 不耗费CPU和内存。即使业务量很大, 集群中Transfer也只需要寥寥几台即可。
- 在Trident中, Business只负责把收到的数据进行业务逻辑处理。类似PHP-FPM。它需要各种运算、读写数据库/文件, Curl请求某个接口, 抓去某些信息等操作, 这可能会大量耗费服务器的资源, 因此, 集群中大部分机器都是用来部署Business。

## 使用方法
假设我们集群是10台机器。IP分别是10.10.10.1 - 10.10.10.10

我们用一台部署Confluence, 两台部署Transfer, 七台部署Business。

#### Confluence
在一台机器上部署Confluence, 这台机器的IP是10.10.10.1, Confluence不接收设置子进程数。

###### 10.10.10.1机器上的示例代码如下:
```php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//Trident类的前四个参数都是给Transfer层用的, 最后一个参数是选择启动Confluence/Transfer/Business, 该参数留空则是三层全部启动。
$trident = new \MeepoPS\Api\Trident('', '', '', array(), 'confluence');

//Confluence需要监听的IP和端口, 建议填写内网IP, Transfer和Business都会主动连接到这个IP和端口上
$trident->confluenceIp = '10.10.10.1';
$trident->confluencePort = '19911';

//启动Trident三层模型中的Confluence
$trident->run();

//启动MeepoPS
\MeepoPS\runMeepoPS();
```

#### Transfer
在两台机器上部署Transfer, 这两台机器的IP是10.10.10.2和10.10.10.3, Transfer可以设置子进程数, 初始建议和CPU核心数相同。

###### 10.10.10.2机器上的示例代码如下:
```php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用基于Trident三层网络模型的Api;
//Trident接口第一个参数是需要使用的底层接口, 如Telnet接口、Http接口、WebSocket接口等
//Trident接口的第二和第三个参数, 是指供普通用户链接的IP和端口。
//Trident接口第四个参数是php原生函数stream_context_create()所需要的参数, 默认留空即可。
//Trident接口的第五个参数填写Transfer。这样就可以只启动Trident三层模型中的Transfer。
$telnet = new \MeepoPS\Api\Trident('telnet', '0.0.0.0', '19910', array(), 'transfer');

//Confluence的IP和端口, Transfer需要链接到Confluence去注册自己。
$telnet->confluenceInnerIp = '10.10.10.1';
$telnet->confluencePort = '19911';

//Transfer的内网IP和端口, Transfer监听这个IP和端口后会等待Business的链接。 
//IP, 建议填写内网IP, 这个IP与上面在new Trident()时的IP可以一样, 也可以不一样。
$telnet->transferInnerIp = '10.10.10.2';
//端口, 这个端口与上面在new Trident()时的端口必须不一样。
$telnet->transferInnerPort = '19912';

//这台机器上Transfer要启动几个子进程
$telnet->transferChildProcessCount = 24;

//启动三层模型
$telnet->run();

//启动MeepoPS
\MeepoPS\runMeepoPS();
```

###### 10.10.10.3机器上的示例代码如下:
```php
//这些都和上面的一模一样
require_once 'MeepoPS/index.php';
$telnet = new \MeepoPS\Api\Trident('telnet', '0.0.0.0', '19910', array(), 'transfer');
$telnet->confluenceInnerIp = '10.10.10.1';
$telnet->confluencePort = '19911';

//------这里是唯一不同的地方---------
//唯一不同的地方就是IP变了。
//如果不变, 所有的Business都会链接到第一台Transfer, 而第二台Transfer上一个Business都没有
$telnet->transferInnerIp = '10.10.10.3';
$telnet->transferInnerPort = '19912';

//这部分也和上面的一样
$telnet->transferChildProcessCount = 24;
$telnet->run();
\MeepoPS\runMeepoPS();
```

#### Business
在剩余七台机器上部署Business, 这七台机器的IP是10.10.10.3 - 10.10.10.10, Business可以设置子进程数, 初始建议和CPU核心数相同。

###### 这七台机器代码完全相同, 示例代码如下:
```php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//Trident类的前四个参数都是给Transfer层用的, 最后一个参数是选择启动Confluence/Transfer/Business, 该参数留空则是三层全部启动。
$telnet = new \MeepoPS\Api\Trident('', '', '', array(), 'business');

//Confluence的IP和端口, Business需要链接到Confluence去注册自己。
$telnet->confluencePort = '19911';
$telnet->confluenceInnerIp = '10.10.10.1';

//这台机器上Business要启动几个子进程
$telnet->businessChildProcessCount = 24;

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
$telnet->run();

//启动MeepoPS
\MeepoPS\runMeepoPS();
```