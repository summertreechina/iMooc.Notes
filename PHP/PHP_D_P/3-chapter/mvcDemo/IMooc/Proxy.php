<?php
namespace IMooc;
// 代理模式
class Proxy implements IUserProxy
{
	function getUserName($id) {
		$db = \IMooc\Factory::getdatabase('slave');
		$info = $db->query("select name from user where id=1 limit 1");
	};
	function setUserName($id, $new_name) {
		$db = \IMooc\Factory::getDatabase('master');
		$db->query("updata user name='lili' where id= 1 limit 1");
	};
}









?>