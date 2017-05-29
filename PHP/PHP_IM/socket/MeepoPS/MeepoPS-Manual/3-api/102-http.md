# HTTP接口

新增自V0.0.3

接口类文件为: Api/Http.php

Http接口时指使用应用层Http协议来解析数据流的接口类文件。

使用Http接口, 只需要实例化Api\Http.php即可。

使用HTTP协议, 可以在简单场景下替代Nginx/Apache, 使MeepoPS成为一个WebServer。比如一些软件, 都是自带Web管理后台, 如队列软件RabbitMQ, 部署在10.10.10.10, 那么默认访问10.10.10.10:15672就可以进入RabbitMQ自带的Web管理后台来做一些增删改查, 这时RabbitMQ自带的WebServer, 并非由Apache/Nginx提供。

啰嗦了一串, 就是说有的时候, 业务场景简单, 比如自行开发了MeepoPS的管理后台, 那么让MeepoPS新启动一个示例，作为WebServer，监听80端口。如若不然，还要装个Nginx/Apache，太麻烦了。

启动使用HTTP协议的MeepoPS, 开发应用时和普通WebServer的感觉99.99%一致。

### 与普通WebServer开发时的不同

唯三的不同就是SESSION功能, header()函数, setcookie()函数。

平常，我们使用了header()设置了一个头，然后PHP告诉Nginx，你给我设置个头。

但是，MeepoPS是更加底层的，基于TCP协议所开发，头信息需要MeepoPS自行拼接后直接告诉客户端的浏览器。所以，如果您直接调用PHP自带的header()函数设置的头，MeepoPS无法感知，客户端的浏览器也就接收不到您设置的头信息了。

cookie和seesion同理。

##### SESSION
因为PHP的Session处理, 在使用session_start()时会自动分配SESSION ID. 但是MeepoPS是常驻内存的PHP, 这就导致所有人访问时都只会用同一个SESSION ID。即使session_set_save_handler等自定义SESSION的函数也不可以。

因此, 只能在使用SESSION时, 各位同学不能再使用session_系列函数。

另外，除了Session Name外, 其余配置都使用php.ini中的"session.*"的配置项。

- 开启SESSION(类似session_start()): `\MeepoPS\Api\Http::sessionStart();`。
- 保存SESSION(自动执行的, 不需要手动, 类似session_write_close()): `\MeepoPS\Api\Http::sessionWrite();`。
- 获取SESSION ID(类似session_id()): `\MeepoPS\Api\Http::sessionId();`。
- 销毁SESSION(类似session_destroy()): `\MeepoPS\Api\Http::sessionDestroy();`。

如果您需要SESSION共享, 请根据需要自行修改MeepoPS/Library/Session.php

SESSION的GC在调用`\MeepoPS\Api\Http::sessionStart();`时自动执行, 触发机率和SESSION有效期请参考php.ini中的session.gc_probability, session.gc_divisor, session.gc_maxlifetime。

##### header()函数
MeepoPS的HTTP协议中, 不支持直接使用header()函数来设置头, 设置头信息时, 请使用`\MeepoPS\Api\Http::setHeader();`. 参数个数和含义与header()完全一致。

##### setcookie()函数
MeepoPS的HTTP协议中, 不支持直接使用setcookie()函数来设置Cookie, 设置Cookie信息时, 请使用```\MeepoPS\Api\Http::setCookie();```. 参数个数和含义与setcookie()完全一致。

### 使用方法
使用时调用Http的接口即可。
```
$telnet = new \MeepoPS\Api\Http('0.0.0.0', '19910');
```

### 特殊属性
无, 与[接口](../3-api)中所阐述的通用属性完全一致。

### 特殊方法
除[接口](../3-api)中所阐述的通用方法外, HTTP接口所独有的:

#### 设置HTTP头信息\MeepoPS\Api\Http::setHeader()
- 名称: \MeepoPS\Api\Http::setHeader();
- 参数: 参数个数和含义与header()完全一致。
- 返回: bool 
- 描述: MeepoPS的HTTP协议中, 不支持直接使用header()函数来设置头, 设置头信息时, 请使用`\MeepoPS\Api\Http::setHeader();`。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
\MeepoPS\Api\Http::setHeader('Location: index.php');
//或者
\MeepoPS\Api\Http::setHeader('HTTP/1.1 400 Bad Request');
```

#### 删除指定的HTTP头\MeepoPS\Api\Http::delHttpHeader($name)
- 名称: \MeepoPS\Api\Http::delHttpHeader();
- 参数: 参数$name是需要删除的头的名称。
- 返回: void 
- 描述: 删除指定的HTTP头。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
\MeepoPS\Api\Http::delHttpHeader('TEST');
```

#### 设置HTTP Cookie信息\MeepoPS\Api\Http::setCookie()
- 名称: \MeepoPS\Api\Http::setCookie();
- 参数: 参数个数和含义与setcookie()完全一致
- 返回: bool 
- 描述: MeepoPS的HTTP协议中, 不支持直接使用setcookie()函数来设置Cookie, 设置Cookie信息时, 请使用`\MeepoPS\Api\Http::setCookie();`。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
\MeepoPS\Api\Http::setCookie('USERNAME', 'meepops');
\MeepoPS\Api\Http::setCookie('SEX', 'male');
```

#### 开启SESSION \MeepoPS\Api\Http::sessionStart()
- 名称: \MeepoPS\Api\Http::sessionStart();
- 参数: 无。
- 返回: bool 
- 描述: 开启SESSION, 类似session_start()。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//开启SESSION
\MeepoPS\Api\Http::sessionStart()
```

#### 保存SESSION \MeepoPS\Api\Http::sessionWrite()
- 名称: \MeepoPS\Api\Http::sessionWrite();
- 参数: 无。
- 返回: bool 
- 描述: 保存SESSION, 本方法自动执行, 通常不需要您手动, 类似session_write_close(), 默认在脚本执行结束时触发。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//开启SESSION
\MeepoPS\Api\Http::sessionStart()
//立即保存SESSION
\MeepoPS\Api\Http::sessionWrite()
```

#### 获取SESSION ID \MeepoPS\Api\Http::sessionId()
- 名称: \MeepoPS\Api\Http::sessionId();
- 参数: 无。
- 返回: bool 
- 描述: 获取SESSION ID, 类似session_id()。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//开启SESSION
\MeepoPS\Api\Http::sessionStart()
//获取SESSION ID
$sessionId = \MeepoPS\Api\Http::sessionId()
```

#### 销毁SESSION \MeepoPS\Api\Http::sessionDestroy()
- 名称: \MeepoPS\Api\Http::sessionDestroy();
- 参数: 无。
- 返回: bool 
- 描述: 销毁SESSION, 类似session_destroy()。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//开启SESSION
\MeepoPS\Api\Http::sessionStart()
//销毁SESSION
\MeepoPS\Api\Http::sessionDestroy()
```
 
#### 设置HTTP错误页 \MeepoPS\Api\Http::setErrorPage()
- 名称: \MeepoPS\Api\Http::setErrorPage();
- 参数1: $httpCode。HTTP状态码.
- 参数2: $description。加载页面的文件路劲, 或者描述。
- 返回: bool 
- 描述: 设置HTTP错误页, 指定HTTP状态码, 当此HTTP状态码时, 加载指定的页面, 或者在MeepoPS的默认样式中显示描述。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//设置错误页
//404, 设置一个专门的页面来展示
$http->setErrorPage('404', __DIR__ . '/Test/Web/404.html');
//403, 使用默认样式(其实就是居中了一句话), 自定义错误描述
$http->setErrorPage('403', '您没有被授权访问!');
```

#### 设置域名和路径: setDocument($domain, $path)
- 名称: setDocument();
- 参数1: $domain。域名(包含端口, 80可省略)
- 参数2: $path。代码根目录。
- 返回: bool 
- 描述: 新增自V0.0.5。设置不同域名的不同代码根目录。

###### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
$http = new \MeepoPS\Api\Http('0.0.0.0', '8080');
$http->setDocument('localhost:8080', '/var/www/MeepoPS/Example/Web_Server/Web');
```

了解HTTP协议是什么, 这里是 [传送门](../7-protocol/4-http.md)