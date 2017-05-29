<?php
/**
 * 模拟客户端的测试脚本
 * 用来测试服务端的链接数容量
 * 特性: 较多的链接数, 极快的发送频率
 * Created by lane
 * User: lane
 * Date: 16/4/26
 * Time: 下午2:32
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

$clientList = array();
$clientCount = 20000;
while (true) {
    if (count($clientList) >= $clientCount) {
        break;
    }
    $errno = $errmsg = '';
    $client = stream_socket_client('127.0.0.1:19910', $errno, $errmsg);
    if (!$client) {
        var_dump($errno);
        var_dump($errmsg);
        continue;
    }
    $clientList[] = $client;
}
echo "创建成功\n";
while (1) {
    var_dump(count($clientList));
    sleep(10);
}
