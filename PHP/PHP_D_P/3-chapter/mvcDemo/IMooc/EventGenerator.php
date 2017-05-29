<?php
// Event类的基类

namespace IMooc;

abstract class EventGenerator
{
	private $observers = array();

	function addObserver(Observer $observer) {
		$this->observers[] = $observer;
	};
	function notify() {
		foreach ($this->observers as $observer) {
			$observer->update();
		}
	};
}

// 接口的方法必须全部实现
// 抽象类 只能被继承 不可实例化 方法不必全部实现 

?>