<?php
$title = '以JSON的方式封装数据接口';
1.json_encode();
2.iconv();
3.通信数据标准格式：状态码 code；提示信息 message；返回的数据 data


$arr = array(
	'id'   => 9,
	'name' => 'nanan',
	'age'  => 24,
	'sex'  => 'girl'
	);
// json_encode($arr);
// $newData = iconv('UTF-8', 'GBK', 'this is a data');
// json_encode($newData);


class Response
{
	function __construct($argument)
	{
		//
	}

	public static function get_json($code, $message = '', $data = array()) {
		if (!is_numeric($code)) {
			// return '';
			exit('code类型错误');
		}
		$data_combo = array(
			'code'    => $code,
			'message' => $message,
			'data'    => $data
			);
		echo json_encode($data_combo);
		exit;
	}
}

Response::get_json('400', 'OK!', $arr);



 ?>