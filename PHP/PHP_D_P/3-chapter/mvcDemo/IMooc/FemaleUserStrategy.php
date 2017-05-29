<?php
namespace IMooc;

class FemaleUserStrategy implements UserStrategy
{
	public function showAD() {
		echo "2017款女装.<br/>";
	}

	public function showCategory() {
		echo "化妆品、鞋子.<br/>";
	}

}




?>