<?php
namespace \APP\Controller\Home;
// 策略模式展示 实现
class HomePage
{
	protected $strategy;

	public function index() {
		// 对象包含对象 对象包含策略对象 对象包含策略对象内的方法 而实现了方法的拓展
		$this->strategy->showAD();
		$this->strategy->showCategory();
	}

	public function setStrategy(\IMooc\UserStrategy $strategy) {
		$this->strategy = $strategy;
	}


}

// 对象调用
$page = new HomePage;
if (isset($_GET['Female'])) {
	$ObjStrategy = new \IMooc\FemaleUserStrategy;
} else {
	$ObjStrategy = new \IMooc\MaleUserStrategy;
}
$page->setStrategy($ObjStrategy)；  // 由此实现了策略的注入
$page->index();



?>