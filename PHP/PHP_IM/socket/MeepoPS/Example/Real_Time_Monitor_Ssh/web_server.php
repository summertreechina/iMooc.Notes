<?php
/**
 * Web服务器程序
 * Created by Lane
 * User: lane
 * Date: 16/6/22
 * Time: 下午6:20
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

//使用HTTP协议传输的Api类
$http = new \MeepoPS\Api\Http('0.0.0.0', '19911');

//启动的子进程数量. 通常为CPU核心数
$http->childProcessCount = 1;

//设置MeepoPS实例名称
$http->instanceName = 'MeepoPS-Http';

//启动放在上层