<?php
/**
 * 客户端 - 服务器资源情况采集
 * 每秒发送一次数据给服务端
 * Created by lane
 * User: lane
 * Date: 16/4/26
 * Time: 下午2:32
 * E-mail: lixuan868686@163.com
 * WebSite: http://www.lanecn.com
 */

while(1){
    $errno = $errmsg = '';
    $client = stream_socket_client('127.0.0.1:19910', $errno, $errmsg);
    if($client){
        while (1) {
            $data = getData();
            $data = json_encode($data) . "\n";
            $result = @fwrite($client, $data);
            if(!$result){
                break;
            }
            while (feof($client) === false && $d = fgetc($client)) {
                if ($d === "\n") {
                    break;
                }
                $data .= $d;
            }
            sleep(1);
        }
    }
    fclose($client);
}

function getData(){
    exec('vmstat', $vmstat);
    $keyList = explode(' ', $vmstat[1]);
    foreach($keyList as $k=>$key){
        if(!$key){
            unset($keyList[$k]);
        }
    }
    $keyList = array_values($keyList);
    $valueList = explode(' ', $vmstat[2]);
    foreach($valueList as $k=>$value){
        if($value === ''){
            unset($valueList[$k]);
        }
    }
    $valueList = array_values($valueList);
    $data = array();
    foreach($keyList as $k=>$key){
        switch($key){
            case 'buff':
            case 'us':
            case 'sy':
            case 'id':
                $data[$key] = $valueList[$k];
                break;
        }
    }
    return $data;
}