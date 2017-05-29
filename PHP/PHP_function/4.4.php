<?PHP
// 匿名函数
// 闭包
// 闭包经典的使用方式
// 使用闭包需要注意的几个问题？
// 作为函数的参数使用

// 声名函数
function test_closure($name, Closure $clo) {
	echo '....';
	$clo();
}
// 调用函数
test_closure('Lily', function(){
	echo '...';
});




?>