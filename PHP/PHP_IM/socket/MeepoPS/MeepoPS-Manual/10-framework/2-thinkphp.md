# ThinkPHP和MeepoPS
本页用来说明MeepoPS是如何集成到ThinkPHP中的。以ThinkPHP3.2.3为例。

### MeepoPS如何集成到ThinkPHP

#### 环境说明

- 使用ThinkPHP的项目目录: /var/www/appName/
- MeepoPS目录: /var/www/appName/ThinkPHP/Library/Vendor/MeepoPS
- 使用MeepoPS的机器人客服项目目录: /var/www/appName/RobotChat/
- 启动MeepoPS的代码路径: /var/www/appName/RobotChat/Controller/MeepoPSController.class.php

#### MeepoPSController的代码
```php
<?php
namespace RobotChat\Controller;
use Think\Controller;
class MeepoPSController extends Controller{
    public function start() {
        //这里为什么要处理一下$argv, 请看后面的详细解释
        global $argv;
        $argv[0] = !empty($argv[0]) ? $argv[0].'/'.$argv[1] : '';
        $argv[1] = !empty($argv[2]) ? $argv[2] : '';
        $argv[2] = !empty($argv[3]) ? $argv[3] : '';
        
        //引入MeepoPS/index.php
        vendor("MeepoPS.index");
        
        //-----下面就是大家熟悉的MeepoPS启动代码了-------
        
        //使用WebSocket传输的Api类
        $webSocket = new \MeepoPS\Api\Websocket('0.0.0.0', '19910');
        $webSocket->callbackStartInstance = array('\RobotChat\Service\CallbackService', 'startInstance');
        $webSocket->callbackConnect = array('\RobotChat\Service\CallbackService', 'startInstance');
        $webSocket->callbackNewData = array('\RobotChat\Service\CallbackService', 'newData');
        //启动MeepoPS
        \MeepoPS\runMeepoPS();
    }
}
```

#### 启动MeepoPS

- 进入项目目录: `cd /var/www/appName/`
- 启动MeepoPS: `sudo php index.php RobotChat/MeepoPS/start start`

#### 代码里为什么要处理$argv

$argv是系统变量, 为什么要特殊处理一下?

在MeepoPSController.class.php中, 我们有如下的代码
```php
global $argv;
$argv[0] = !empty($argv[0]) ? $argv[0].'/'.$argv[1] : '';
$argv[1] = !empty($argv[2]) ? $argv[2] : '';
$argv[2] = !empty($argv[3]) ? $argv[3] : '';
```

普通启动时, 启动命令类似于`php demo-telnet.php start`。 MeepoPS需要解析这条命令, 来提取关键信息, 比如"start"、"stop"、"restart"等。

此时MeepoPS获取到的关键词是"start", 通过$argv[1]可以得到。 启动文件名是"demo-telnet.php"。 通过$argv[0]可以得到。

而在ThinkPHP中, 启动命令是`sudo php index.php RobotChat/MeepoPS/start start`, 这时的关键字"start"是$argv[2], 启动文件名"index.php"是$argv[0]和$argv[1]共同获得。

因此, 就需要进行特殊处理了。否则MeepoPS会拿$argv[1], 也就是"RobotChat/MeepoPS/start"去选择执行的命令, 然而MeepoPS发现, 命令不是"start|stop|restart|kill", 就会提示错误。

### MeepoPS在ThinkPHP中完美运行的建议

#### Mysql不活跃链接超时

ThinkPHP链接到Mysql, 如果这个链接一定时间内不活跃, 那么Mysql就会关闭这个链接。此时, 我们再使用这个链接的时候, 会报错["HY000",2006,"MySQL server has gone away"]

我们的目的是报这个错误的时候重新发起Mysql的链接, 并且再次执行SQL。

我们需要略微修改ThinkPHP的代码, 只需要修改一个文件就OK。代码文件路径: ThinkPHP/Library/Think/Db/Driver.class.php

##### 修改步骤: 

1.在这个文件的类的最下面, 写一个方法, 意思是如果PDO异常码是2006或者2013, 那么就删除之前的存储链接的变量, 重新链接。代码如下:
```php
public function executeException($e, $str, $fetchSql)
{
    if ($e->errorInfo[1] == 2006 || $e->errorInfo[1] == 2013) {
        $log = 'executeException: ' . json_encode($e);
        Log::write($log, Log::WARN);
        $linkIdList = array_keys($this->linkID, $this->_linkID);
        if($linkIdList && is_array($linkIdList)){
            foreach($linkIdList as $linkId){
                unset($this->linkID[$linkId]);
            }
        }
        $this->close();
        $this->initConnect();
        $this->execute($str, $fetchSql);
    }
}
```

2.修改query()方法public function query($str, $fetchSql = false)。将这个方法中所有代码剪切, 写一个try catch, 把旧代码复制到try中。
```php
public function query($str, $fetchSql = false){
    try{
        $this->initConnect(false);
        if (!$this->_linkID) return false;
        ......此处省略100000字......
        // 调试结束
        $this->debug(false);
        if (false === $result) {
            $this->error();
            return false;
        } else {
            return $this->getResult();
        }
    }catch (\PDOException $e){
        $this->executeException($e, $str, $fetchSql);
    }
}
```

3.修改execute()方法。public function execute($str, $fetchSql = false)。将这个方法中所有代码剪切, 写一个try catch, 把旧代码复制到try中。
```php
public function execute($str, $fetchSql = false){
    try{
        $this->initConnect(false);
        if (!$this->_linkID) return false;
        ......此处省略100000字......
        $this->debug(false);
        if (false === $result) {
            $this->error();
            return false;
        } else {
            $this->numRows = $this->PDOStatement->rowCount();
            if (preg_match("/^\s*(INSERT\s+INTO|REPLACE\s+INTO)\s+/i", $str)) {
                $this->lastInsID = $this->_linkID->lastInsertId();
            }
            return $this->numRows;
        }
    }catch (\PDOException $e){
        $this->executeException($e, $str, $fetchSql);
    }
}
```

经过这三步, 就搞定啦~