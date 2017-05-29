<?php
>>>PHP链式操作的实现  $db -> where() -> limit() -> order();

class DB {

	function where() {
		'最核心的是要return this 才能维持链式调用'
		return $this;
	}

	function sort() {
		return $this;
	}

	function limit() {
		return $this;
	}

	function order() {
		return $this;
	}
}


?>