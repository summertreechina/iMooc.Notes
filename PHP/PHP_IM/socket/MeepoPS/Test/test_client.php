<?php
/**
 * 客户端演示
 * Created by lane
 * User: lane
 * Date: 16/4/26
 * Time: 下午2:32
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */
$errno = $errmsg = '';
$client = stream_socket_client('127.0.0.1:19910', $errno, $errmsg);
if (!$client) {
    var_dump($errno);
    var_dump($errmsg);
    exit;
}
while (1) {
    $readList = array($client);
    $writeList = array();
    stream_select($readList, $writeList, $err, 10, 0);
    foreach ($readList as $id => $client) {
        fwrite($client, "hello world\n");
        $data = '';
        while (feof($client) === false && $d = fgetc($client)) {
            if ($d === "\n") {
                break;
            }
            $data .= $d;
        }
        var_dump('客户端用户' . $id . '号收到消息: "' . $data . '"');
    }
}