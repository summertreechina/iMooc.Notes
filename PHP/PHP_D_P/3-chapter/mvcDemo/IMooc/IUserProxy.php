<?php
namespace IMooc;
// 代理模式 接口 约束Proxy类
interface IUserProxy
{
	function getUserName($id);
	function setUserName($id, $new_name);
}






?>