<?php
// 1.小记:魔术变量
// >__LINE__;
// >__FILE__;
// >__DIR__;
// >__FUNCTION__;
// >__CLASS__;
// >__TRAIT__;
// >__METHOD__;
// >__NAMESPACE__;
// 使用静态变量&静态函数的时候，不会触发__construct()
// file_exists()
// is_null($var)
// @ 符号
// 老师的逻辑很混乱，有些功能要重写
class FileCache
{
	private $_dir;

	const EXT = '.md';
	
	function __construct() {
		$this->_dir = dirname(__FILE__).'/files/';
	}

	public function cache_data($file_name, $data='', $path='') {
		$file = $this->_dir . $path . $file_name . self::EXT;

		if ($data != '') {// 有值是写入文件的逻辑
			$dir = dirname($file);
			// $dir = file_exists($file);
			if(!is_dir($dir)) {
				mkdir($dir, 0777);
			}
			return file_put_contents($file, json_encode($data)); 

		} else if (is_null($data)) {
			return @unlink($file);
		}

		if ( is_file($file) ) {
			return json_decode(file_get_contents($file), true);
		} else {
			exit('您要读取的文件不存在\n');
		}
	}

}
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
$cache = new FileCache();
print_r( $cache->cache_data('test', '', '/3/.'));



?>