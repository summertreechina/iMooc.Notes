<?php
/**
 * DEMO文件. 展示基于HTTP协议的WebServer
 * Test/Web目录下有测试文件,包括登陆, SESSION, 跳转, 文件上传等
 * Created by Lane
 * User: lane
 * Date: 16/4/16
 * Time: 下午10:05
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用HTTP协议传输的Api类
$http = new \MeepoPS\Api\Http('0.0.0.0', '19910');

//启动的子进程数量. 通常为CPU核心数
$http->childProcessCount = 1;

//设置MeepoPS实例名称
$http->instanceName = 'MeepoPS-Http';

//设置错误页
//404, 设置一个专门的页面来展示
$http->setErrorPage('404', __DIR__ . '/Example/Web/404.html');
//403, 使用默认样式(其实就是居中了一句话), 自定义错误描述
$http->setErrorPage('403', '您没有被授权访问!');

//启动MeepoPS
\MeepoPS\runMeepoPS();