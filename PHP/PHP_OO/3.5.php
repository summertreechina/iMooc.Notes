<?php
// __destruct();
#（1）function __destruct(){} 析构函数:
#（2）构造函数是在实例化对象时被调用，析构函数是在程序运行完结束时自动调用
#（3）把变量设置为 null ，可以立即调用析构函数 $James = null;
#		当对象不会再被使用时，触发析构函数
#（4）析构函数通常被用在清理程序使用的资源。
#
class NBA {
	// 定义属性
	public $name;
	public $height;
	public $weight;
	public $team;
	public $number;

	function __construct($name, $height, $weight, $team, $number) {
		// echo "constructing... \n";
		$this->name   = $name;
		$this->height = $height;
		$this->weight = $weight;
		$this->team   = $team;
		$this->number = $number;
		// print_r($this);
	}

	public function __destruct() {
		echo "析构函数...";
	}

	public function run() {
		echo "run\n";
	}
	public function shout() {
		echo "shout\n";
	}
}

$job = new NBA('job', '198cm', '180kg', 'wow', 23);
// print_r($job);
# echo "$job->height;\n";
# echo "$job->number;\n";
# 198cm;
# 23;
# 析构函数...

// $job = null;
	// 析构函数...
$jobs = &$job;

?>