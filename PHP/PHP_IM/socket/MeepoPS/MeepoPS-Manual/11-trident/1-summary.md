# Trident接口简介

Trident新增自V0.0.5

这一章都是文字, 大概看看, 下章是图文。

## Trident的起源?

在MeepoPS的早期, 面临着不能做分布式人与人聊天的尴尬。因为同一台机器进程之间不能通信(或者说很难), 更何况要跨机器呢。在这种情况下, MeepoPS的应用是人机通信(比如机器人客服、WebServer、监控系统等), 做不了人人通信, 也就是不能做人和人之间的聊天软件。在这种情况下, Trident诞生了。

Trident是三叉戟的英文, 在这里, 它代表着三层网络模型的集合。使用Trident接口后, MeepoPS可以轻松实现分布式部署、跨机房、跨机器、跨进程的通信。

## 用Trident? 不用Trident?
Trident虽说任何场景都可以使用, 它提供了之前Telnet接口、Http接口、WebSocket接口等所提供的所有功能。但是, 毕竟这是一个更加复杂的模型, 而且从一层变成了三层, 会有更多的网络消耗。不过, 除非量很大, 并且其他该优化的地方都优化完了, 不然几十万一天的量, 也没什么太大的区别。

##### 什么时候必须使用Trident?
需要普通用户对另一个普通用户发送消息的应用(人与人的应用)。就像QQ微信一样, 这就涉及到了跨服务器、跨进程的通信, 就必须使用Trident。

##### 什么时候不建议使用Trident
不涉及到人对人的直接通讯就可以不使用Trident。
- 我想充当WebServer。不想每次都要在新机器上安装Nginx/Apache/PHP-FPM。这种情况就是多机器多进程相互独立, 彼此不交互, 状态用SESSION的传统的Web开发, 可以不使用Trident接口, 直接使用Http接口即可。
- 人机聊天。比如智能客服, 客户发消息给服务器, 服务器全文检索/语义分析/匹配答案等操作完成后回复消息给客户端。
- 监控。实时监控服务器性能、负载等字段, 绘制折线图。

## Trident是什么?

Trident接口, 并不像HTTP、WebSocket等接口, 对应着一个应用层协议。Trident接口是没有对应应用层协议的, 它更加的高级, 凌驾于Http接口和WebSocket接口, 但是它仍然可以完全使用HTTP、WebSocket的接口所提供的功能。

Trident接口是一个更加高级、更加抽象的接口, 它封装了三层网络模型。

Trident在底层, 仍旧使用像Telnet接口、Http接口、WebSocket接口等。

三层网络模型是指: Confluence、Transfer(也叫做Gateway)、Business三层。 这在网络通信领域非常常见和经典。

至于为什么要叫做Trident, 这是一个故事。因为这是一个三层模型, 所以最早的时候它叫做ThreeLayerMoudle。显然, 这很Low, 我日思夜想也没想出个好名字。偶尔的机会, 360云查杀的同事分享他们千亿PV/天的架构演变, 提到了一个模型, 也就是MeepoPS所采用的三层网络模型, 其中一个组建叫做Trident(三叉戟)。我一拍脑门, 回来就把ThreeLayerMoudle给替换了。

##### Confluence
Confluence作为管理中心。统领Transfer和Business。每一个Transfer的实例, 每一个Business的实例, 在启动后, 都先向Confluence管理中心注册。

##### Transfer
Transfer作为链接中心。接收普通用户的链接和Business的链接。将普通用户的数据转发给Business, 再把Business发送来的数据转发给Business。
Transfer在接收普通用户的链接时, 仍旧使用Telnet接口或Http接口或WebSocket接口。

##### Business
Business作为业务中心。接收Transfer发送来的数据, 进行业务逻辑的处理, 比如增删改查。处理后将结果发送给Transfer。
我们所有的代码都是在写Business层的。在传统接口中, 回调函数如callbackNewData($connect, $data)中的参数$connect是服务器和用户的链接。
但是在Trident模型的Business层中, callbackNewData($connect, $data)中的参数$connect是Business和Transfer之间的链接, 通常业务开发中不需要用到这个参数。其他回掉函数不受影响, 唯独callbackNewData是个特例。

## Trident工作流程

1. 服务器分别启动Confluence、Transfer、Business, 启动顺序无所谓。
2. Confluence启动后监听19911(默认)端口, 等待Transfer和Business
3. Transfer启动后, 首先监听19912(默认)+n的端口, n是指Transfer的进程数-1。即Transfer的每个进程, 去监听一个端口, 每个进程监听且仅监听一个。分别监听19912、19913、19914...这些Transfer监听的端口等待Business的链接。
4. Transfer监听完毕后, 链接到Confluence, 告知Confluence自己在(3)中监听的IP和端口。
5. Business启动后, 首先链接到Confluence, Confluence收到Business的链接后, 会把当前所有注册过的Transfer的信息发送给Business。Business根据得到的Transfer的IP和端口, 建立Business和Transfer链接。
6. 启动完成。
7. 一个普通用户来啦。他们是链接到Transfer的, 也就是Transfer监听的19910端口(默认)。
8. 普通用户把数据发给Transfer。Transfer随机选择一个Business(不限机器、不限进程)的链接, 将数据发送给Business。
9. Business根据用户的数据进行相应的业务逻辑处理。处理后再根据不同的情况发送给不同的Transfer。请注意, 这个Transfer和之前接收数据的Transfer可能不是同一个, 因为业务逻辑涉及到A用户发送给B用户, A用户发给自己(智能机器人客服), A用户群发给其他所有用户等等情况。这个我们再表。
10. 最后Transfer将Business发来的数据转发给普通用户。
11. 如果普通用户继续发送消息的话, 重复(7)、(8)、(9)三步。
12. Say goodbye.

## Trident的高可用
Trident内部用多重手段保证链接的可用性。

#### 谁是客户端谁是服务端?

在Trident内部, 谁是服务端谁是客户端的角色会根据不同场景而变换。比如Confluence和Transfer, Confluence监听IP和端口, 那么Confluence就是服务端, Transfer主动链接到这个IP和端口, 那么Transfer就是客户端。
又比如Transfer和Business, Transfer监听IP和端口, Transfer是服务端, Business主动链接到这个IP和端口, Business就是客户端。
又比如Transfer和普通用户, 那毫无疑问, Transfer是服务端, 普通用户是客户端。

#### 用途和权限验证 
Trident内部, 每个链接建立后, 服务端都先做一个定时器, 如果客户端在一定时间内没有告诉服务端建立此链接的意义、如果客户端在一定时间内没有完成Token的校验, 那么服务端会好不犹豫的断开链接。可以防止比如公司内部安全部门的扫描、外部人员扫描IP和端口等。

#### PING和PONG
Trident内部的每个链接, 都有PING/PONG机制。服务端向客户端发送PING, 客户端向服务端响应PONG。如果服务端在发送PING后没有收到客户端响应的PONG的次数超过一定限度(次数可配, 默认为1次), 则服务端主动断开链接。

#### 重链机制
客户端感知链接断开后, 会尝试重新链接到服务端。

## 使用方法
使用时调用Trident的接口即可。
```
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用基于三层网络模型的文本传输的Api类
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

//设置收到新消息后的回调函数
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