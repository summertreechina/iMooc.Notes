<?php
// __construct
class NBA {
	// 定义属性
	public $name;
	public $height;
	public $weight;
	public $team;
	public $number;

	public function __construct($name, $height, $weight, $team, $number) {
		echo "constructing... \n";
		$this->name   = $name;
		$this->height = $height;
		$this->weight = $weight;
		$this->team   = $team;
		$this->number = $number;
		print_r($this);
	}

	public function run() {
		echo "run\n";
	}
	public function shout() {
		echo "shout\n";
	}
}

new NBA('job', '198cm', '180kg', 'wow', 23);

?>