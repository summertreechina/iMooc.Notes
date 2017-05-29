<?php
namespace IMooc;
class Event extends \IMooc\EventGenerator;
{
	public function trigger() {
		echo "Event Openning...<br/>";

		// 传统的处理会在此增加事件触发的逻辑，有可能达到几十项，难以维护
		// 事件本身和事件之后的逻辑分开，有时众多逻辑输入不同的业务模块
		echo "逻辑1<br/>";

		$this->notify();
	}
}


class Observer_1 implements \IMooc\Observer;
{
	function update($server_info = null) {
		echo "逻辑1<br/>";
	}
}
class Observer_2 implements \IMooc\Observer;
{
	function update($server_info = null) {
		echo "逻辑2<br/>";
	}
}



// 调用...
$event = new Event;
$event->addObserver(new Observer_1);
$event->addObserver(new Observer_2);
$event->trigger();







?>