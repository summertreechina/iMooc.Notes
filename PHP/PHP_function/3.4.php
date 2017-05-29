<?PHP
可变数量的参数
实现方式1
	5.5及更早
	func_num_args(oid);
	func_get_args(oid);
	func_get_arg(arg_num);	// 返回一个数组
实现方式2
	5.6及更晚
	function sum(...$num) { ... }


function get_sum() {
	$arg_num = func_num_args();
	// echo "$arg_num, \n";
	$sum = 0;
	$var = func_get_args();
	// echo "$var, \n";
	if ($arg_num !== 0) {
		foreach ($var as $key => $val) {
			$sum += $val;
		}
	}
	echo "$sum, \n";
}

function get_sum_1() {
	$arg_num = func_num_args();
	$sum = 0;
	if ($arg_num == 0) {
		return $sum;
	} else {
		for ($i=0; $i < $arg_num; $i++) { 
			$sum += func_get_arg($i);
		}
		echo "$sum, \n";
	}
}

function get_sum_2(...$num) {

}


?>