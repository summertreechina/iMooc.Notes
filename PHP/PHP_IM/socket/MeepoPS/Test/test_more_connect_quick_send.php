<?php
/**
 * 模拟客户端的测试脚本
 * 用来测试服务端的QPS
 * 特性: 较多的链接数, 极快的发送频率
 * Created by lane
 * User: lane
 * Date: 16/4/26
 * Time: 下午2:32
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

$clientList = array();
$clientCount = 1000;
$sendCount = 0;
$sendErrorCount = 0;
$receiveCount = 0;
$receiveErrorCount = 0;
$f = fopen('/home/lanec/test_more_connect_quick_send', 'w+');
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
    foreach ($clientList as $id => $client) {
        $result = fwrite($client, "hello world\n");
        $result ? $sendCount++ : $sendErrorCount++;
        $data = '';
        while (feof($client) !== true) {
            $data .= fread($client, 2000);
            if ($data[strlen($data) - 1] === "\n") {
                break;
            }
        }
        $data ? $receiveCount++ : $receiveErrorCount++;
    }
    fwrite($f, json_encode(array('send_count' => $sendCount, 'receive_count' => $sendErrorCount, 'err_send' => $sendErrorCount, 'err_receive' => $receiveErrorCount)) . "\n");
}