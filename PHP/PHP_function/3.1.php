<?PHP
正式开门之：函数参数篇
形参
默认值
强类型参数
可变数量的参数列表
值传递&引用传递
实参
变量的作用域
static静态变量

function get_sum($a, $b) {
	// $a和$b是形参
	$result = $a + $b;
	echo $result;
}

$a = 999;
$b = 888;
// $r = get_sum($a, $b);
// echo $r;
// 在函数的调用时，$a和$b被赋值，时实参
// get_sum(1);
// ? Warning: Missing argument 2 for get_sum(), called 
// get_sum(1,2,3,4);
// ? 3 不报错，直接将多余的值过滤掉
// get_sum(6+2, 5-3);
// ? 10
get_sum($a+$b, 33-22);
// ? 1898
// 总结：php的实参可以是常量、表达式、变量

?>