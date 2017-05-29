<?php
namespace IMooc;

class User
{
	public $id;
	public $name;
	public $mobile;
	public $regtime;
	protected $db;

	public function __construct($uid) {
		$this->db = IMooc\Database\MySQL;
		$this->db->connect('127.0.0.1', 'user', 'root', 'test');
		$userinfo = $this->db->query("select * from user where `id`= $uid limit 1");
		$userinfo = $userinfo->fetch_assoc();

		$this->id = $userinfo['id'];
		$this->name = $userinfo['name'];
		$this->mobile = $userinfo['mobile'];
		$this->regtime = $userinfo['regtime'];
	}

	private function __destruct() {
		$this->db->query("update user set name=`{$this->name}`, mobile=`{$this->mobile}`, regtime=`{$this->regtime}` limit 1");
	}





}





?>