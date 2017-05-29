<?php
// 入口文件 与APP文件夹同级 不在任何命名空间之下 是框架唯一可执行的文件

define('BASEDIR', __DIR__);

include  BASEDIR.'/IMooc/Loader.php';

spl_autoload_register( "\\IMooc\\Loader::autoload" );

IMooc\Object::test();
APP\Controller\Home\Index::test();

// 工厂模式
$db = new \IMooc\Database();
$db = IMooc\Factory::creatDatabase();
$db = Factory::creatDatabase();

// 单例模式 单实例模式
$db = \IMooc\Database::getInstance();

// 注册模式 注册器模式
$db = Imooc\Register::get('db1');

// 适配器模式 适配器的连接 MySQL扩展
$db = IMooc\Database\MySQL;
$db->connect('127.0.0.1', 'user', 'root', 'test');
$db->query('show databases');
$db->close();

// 数据对象映射模式
$user = new User(1);
$user->moblie = '13963933119';
$user->name = '王小丫';
$user->regtime = time();

// 迭代器模式
$users = new \IMooc\AllUser();
foreach ($users as $user) {
	var_dump($user);
}


// 代理模式 传统方式
// 读
$db = \IMooc\Factory::getdatabase('slave');
$info = $db->query("select name from user where id=1 limit 1");
// 写
$db1 = \IMooc\Factory::getDatabase('master');
$db1->query("updata user name='lili' where id= 1 limit 1");
// 新的实现方式
$proxy = new \IMooc\Proxy();
$proxy->getUserName($id);
$proxy->setUserName($id, $proxy);
($proxy) ?什么意思啊


































?>