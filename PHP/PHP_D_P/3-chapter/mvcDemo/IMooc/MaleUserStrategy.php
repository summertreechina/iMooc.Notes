<?php
namespace IMooc;

class MaleUserStrategy implements UserStrategy
{
	public function showAD() {
		echo "男装";
	}

	public function showCategory() {
		echo "电子产品";
	}

}






?>