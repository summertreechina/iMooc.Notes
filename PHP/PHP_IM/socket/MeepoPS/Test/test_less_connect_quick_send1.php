<?php
/**
 * 模拟客户端的测试脚本
 * 用来测试服务端的链接数容量
 * 特性: 极少的链接数, 极快的发送频率
 * Created by lane
 * User: lane
 * Date: 16/4/26
 * Time: 下午2:32
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */
$totalCount = 0;
$errConnect = 0;
$errWrite = 0;
$errRead = 0;
$f = fopen('/home/lanec/test_less_connect_quick_send_err1', 'w+');
while (true) {
    $totalCount++;
    $socket = fsockopen('127.0.0.1', '19910', $errno, $errmsg);
    if (!$socket) {
        fwrite($f, "error: connect. errno=$errno, errmsg=$errmsg\n");
        $errConnect++;
        continue;
    }
    for ($i = 0; $i < 100; $i++) {
        $result = fwrite($socket, "hello world\n");
        if (!$result) {
            $errWrite++;
            continue;
        }
        $data = '';
        while (feof($socket) !== true) {
            $data .= fread($socket, 2000);
            if ($data[strlen($data) - 1] === "\n") {
                break;
            }
        }
        if (!$data || strlen($data) < 10) {
            $errRead++;
        }
    }
    fclose($socket);
    file_put_contents('/home/lanec/test_less_connect_quick_send_result1', json_encode(array('total_count' => $totalCount, 'err_connect' => $errConnect, 'err_write' => $errWrite, 'err_read' => $errRead)));
}
fclose($f);
