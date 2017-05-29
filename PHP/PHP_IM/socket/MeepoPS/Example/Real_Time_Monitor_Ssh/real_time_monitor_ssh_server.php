<?php
/**
 * DEMO文件. 展示基于WebSocket协议的后端程序
 *
 * 实时监控服务器CPU内存等信息, 绘制成折线图
 * 
 * Created by Lane
 * User: lane
 * Date: 16/6/15
 * Time: 下午4:30
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

//引入MeepoPS
require_once '../../MeepoPS/index.php';

//引入WebSocket部分
require_once 'websocket_server.php';

//引入HTTP服务部分
require_once 'web_server.php';

//启动MeepoPS
\MeepoPS\runMeepoPS();