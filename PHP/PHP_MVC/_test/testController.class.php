<?php
/**
* 
*/
class testController
{
	public function show() {
		$data = (new testModel())->get();
		(new testView())->display($data);
	}





}








?>