<?php 
class NBA {
	// 定义属性
	public string $name;
	public $height;
	public $weight;
	public $team;
	public $number;

	public function run(){
		echo "run\n";
	}
	public function shout(){
		echo "shout\n";
	}
}
$job = new NBA();
$job->run();
$job->name = 'job';
echo $job->name;



 ?>