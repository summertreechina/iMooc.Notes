<?php
namespace IMooc\Database;

class MySQLi implements IDatabase
{
	protected $conn;

	function connect($host, $user, $password, $dbname) {
		$conn = mysqli_connect($host, $user, $password, $dbname);
		$this->conn;
	}

	function query($sql) {
		$res = mysqli_query($this->conn, $sql);
		return $res;
	}

	function close() {
		mysqli_close($this->conn);
	}


}





?>