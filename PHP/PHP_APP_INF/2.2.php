<?php
2.2.1 PHP生成XML数据
1>组装字符串 .generate 
2>使用系统类库 'http://php.net/manual/zh/refs.xml.php'
3>header("Content-Type:text/xml")
4>节点不能用“数字”
5> {$var} 花括号也没啥作用 唯一的作用是排除周边字母可能引起的干扰


$content = array(
	'1'   => 9,
	'name' => 'nn',
	'age'  => 20,
	'sex'  => 'girl',
	'hobby'=> array('football', 'talk', 'work')
	);
$raw_data = array(
	'code'    => 200,
	'message' => '数据传输完成',
	'data'    => $content
	);


class Response
{
	public static $rule_data = array(code, message, data);

	function __construct($argument) {}

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

	public static function gener_xml($code, $message = '', $content, $show_node = true) {
		$xml = '';
		if( !is_numeric($code) ) {
			exit('传入数据"$code"类型不合要求');
		}
		if ($show_node) {
			$xml = "header('Content-Type:text/xml')\n";
		}
		$xml .= "<?xml version='1.0' encoding='UTF-8'?>\n";
		$xml .= "<root>\n";
		$xml .= "<code>".$code."</code>\n";
		$xml .= "<message>".$message."</message>\n";
		$xml .= "<data>\n";
		$xml .= "<id>".$content['id']."</id>\n";
		$xml .= "<name>".$content['name']."</name>\n";
		$xml .= "<age>".$content['age']."</age>\n";
		$xml .= "<sex>".$content['sex']."</sex>\n";
		$xml .= "</data>\n";
		$xml .= "</root>\n";

		echo $xml;
	}

	public static function xml_encode($raw_data) {
		if (array_keys($raw_data) != self::$rule_data) {
			print_r(array_keys($raw_data));
			exit("封装数据格式不合要求\n");
		}
		if (!is_numeric($raw_data['code'])) {
			exit("状态码code格式不正确\n");
		}
		$xml  = "header('Content-Type:text/xml')\n";
		$xml .= "<?xml version='1.0' encoding='UTF-8'?>\n";
		$xml .= "<root>\n";
		$xml .= self::arr_to_xml($raw_data);
		$xml .= "</root>\n";

		return $xml;
	}

	public static function arr_to_xml($arr) {
		$xml = "";

		foreach ($arr as $key => $val) {
			$attr = null;
			if (is_numeric($key)) {
				$attr = " id='{$key}'";
				$key = "item";
			}
			$xml .= "<{$key}{$attr}>";
			$xml .= is_array($val) ? self::arr_to_xml($val) : $val;
			$xml .= "</{$key}>\n";
		}
		return $xml;
	}
}

// Response::get_json('400', 'OK!', $arr);
// Response::gener_xml(200, '数据返回成功', $content, false);
// echo Response::arr_to_xml($raw_data);
echo Response::xml_encode($raw_data);
// print_r(new DOMAttr($content));



?>