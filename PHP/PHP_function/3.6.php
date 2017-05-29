<?PHP
// <!-- 变量的作用域 -->
// 超全局变量
$GLOBALS;
$_SERVER;
$_GET;
$_POST;
$_FILES;
$_COOKIE;
$_SESSION;
$_REQUEST;
$_ENV;
// 超全局变量 — 超全局变量是在全部作用域中始终可用的内置变量
// $GLOBALS — 引用全局作用域中可用的全部变量
// $_SERVER — 服务器和执行环境信息
// $_GET — HTTP GET 变量
// $_POST — HTTP POST 变量
// $_FILES — HTTP 文件上传变量
// $_REQUEST — HTTP Request 变量
// $_SESSION — Session 变量
// $_ENV — 环境变量
// $_COOKIE — HTTP Cookies
// $php_errormsg — 前一个错误信息
// $HTTP_RAW_POST_DATA — 原生POST数据
// $http_response_header — HTTP 响应头
// $argc — 传递给脚本的参数数目
// $argv — 传递给脚本的参数数组
$a = 9;
function test_local(){
	echo $a;
}
// test_local();

$g_name = 'Lily';
function get_name() {
	global $g_name;
	// 将函数外部的$g_name全局化
	echo "$g_name, \n";
}
// get_name();

function show_name() {
	echo $GLOBALS['g_name'];
}
// show_name();
// 两种全局变量的不同点？
$v1 = 2;
$v2 = 3;
function test_global_1() {
	global $v1, $v2;
	$v2 = &$v1;
	echo $v2;
	// echo "\n";
}
// test_global_1(); 2
// echo $v2; 3
// >> 以上两个函数揭示的机理
// >> 函数内声名全局变量，取函数外变量的值，另外开辟一个内存空间，放置取到的值
// 声名v1&v2，只是在全局空间内生声名了2个与函数外同名的函数，但是并不是两个相同的变量，所以函数内变量的改变并不能影响外部2个同名函数的值

function test_global_2() {
	// $GLOBALS['v2'] = &$GLOBALS['v1'];
	$GLOBALS['v2'] = $GLOBALS['v1'];
}
test_global_2();
// echo $v2; 2
// $GLOBALS数组不同之处，它是直接引用的外部的值


// >> static 静态变量
// counter 计数器
function counter() {
	static $a = 0;
	echo $a++;
	// echo "$a, \n";
}
counter();
counter();
counter();
counter();
counter();
counter();
// >> static 无效啊？
// >> 不能给 static 赋值 函数表达式；







?>