<?php
namespace IMooc;
/**
* 适配器模式
*/
interface IDatabase
{
	function connect($host, $user, $password, $dbname);

	function query($sql);

	function close();
}




?>