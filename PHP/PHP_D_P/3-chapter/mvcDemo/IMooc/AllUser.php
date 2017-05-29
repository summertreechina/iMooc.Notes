<?php
// 迭代器模式
namespace IMooc;
class AllUser implements \Iterator
// 需要实现PHP标准类库SPL中迭代器Iterator的五个接口
{
	protected $ids = array();
	protected $data = array();
	protected $index;

	function __construct() {
		拿到所有的🆔
		$db = Factory::getDatabase();
		$result = $db->query( "select id from user" );
		$this->ids = $result->fetch_all(MYSQLI_ASSOC);
	}

	function current() {
		当前 第三步
		$id = $this->ids[$this->index]['id'];
		return Factory::getUser($id);
	}
	function next() {
		下一个 第四部
		$this->index ++;
	}
	function valid() {
		验证当前是否有数据 第二步
		return $this->index < count($this->ids);
	}
	function rewind() {
		重置 第一步
		$this->index = 0;
	}
	function key() {
		获取当前的索引
		return $this->index;
	}

}







?>