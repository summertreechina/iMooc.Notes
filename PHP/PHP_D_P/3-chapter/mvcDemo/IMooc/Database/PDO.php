<?php
namespace IMooc\Database;

class PDO implements IDatabase
{
	protected $conn;

	function connect($host, $user, $password, $dbname) {
		$conn = new \PDO("mysql:host=$host;dbname=$dbname", $user, $password);
		$this->conn = $conn;
	}

	function query($sql) {
		$this->conn->query($sql);
	}

	function close() {
		unset($this->conn);
	}
}





?>