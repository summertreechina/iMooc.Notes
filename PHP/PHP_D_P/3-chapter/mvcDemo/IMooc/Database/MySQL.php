<?php
namespace IMooc\Database;


class MySQL implements IDatabase {

	protected $conn;

	function connect($host, $user, $password, $dbname) {
		$conn = mysql_connect($host, $user, $password);
		mysql_select_db($dbname);
		$this->conn = $conn;
	}

	function query($sql) {
		$res = mysql_query($sql, $conn);
		return $res;
	}

	function close() {
		mysql_close($this->conn);
	}
	



}









?>