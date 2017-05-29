<?php
namespace IMooc;
/**
* 
*/
class Factory
{
	
	function __construct()
	{
	}

	public static function creatDatabase() {
		$db = new Database;
		在启用单例模式的情况下，工厂模式也无法直接new 
		$db = Database::getInstance();
		将db注册到注册树上 注册模式添加 注册器模式
		Register::set('db1', $db);

		return $db;
	}

}


interface abstracted{
    public function realCreate();
}
//女人类
class Woman{
    public function action(){
        echo '这是女人';
    }
}
//男人类
class Man{
    public function action(){
        echo '这是男人';
    }
}
//创建女人
class WomanCreator implements abstracted {
    public $chromosome;//染色体
    public function realCreate(){
        if ($this->chromosome == "xx") {
            return new Woman();
        }
    }
}
//创建男人
class ManCreator implements abstracted {
    public $chromosome;
    public function realCreate(){
        if ($this->chromosome == "xy" || $this->chromosome == "xyy") {
            return new Man();
        }
    }
}
//人类工厂
class PersonFactory{
    public function create($what){
        $create = $what."Creator";
        return $create = new $create();
    }
}
$create = new PersonFactory();
$instance = $create->create('Woman');
$instance->chromosome = "xx";
$instance->realCreate()->action();




?>