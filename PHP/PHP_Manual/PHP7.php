<?php 
$str = [
	'http://www.php.net/manual/zh/migration70.new-features.php',
	'http://www.phpchina.com/portal.php?mod=view&aid=41026'
];
1.标量类型声明
	--标量类型声明 有两种模式: 强制 (默认) 和 严格模式。
	function sumOfInts(int ...$ints)
	{
	    return array_sum($ints);
	}

2.返回值类型声明
	function arraysSum(array ...$arrays): array
	{
	    return array_map(function(array $array): int {
	        return array_sum($array);
	    }, $arrays);
	}

3.null合并运算符
	--由于日常使用中存在大量同时使用三元表达式和 isset()的情况， 添加了null合并运算符 (??) 这个'语法糖'。
	$username = $_GET['user'] ?? 'nobody';
	== 等价于:
	$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';
	$username = $_GET['user'] ?? $_POST['user'] ?? 'nobody';

4.太空船操作符（组合比较符）
	--太空船操作符用于比较两个表达式。当$a小于、等于或大于$b时它分别返回'-1、0或1'。
	// 整数
	echo 1 <=> 1; // 0
	echo 1 <=> 2; // -1
	echo 2 <=> 1; // 1
	// 浮点数
	echo 1.5 <=> 1.5; // 0
	echo 1.5 <=> 2.5; // -1
	echo 2.5 <=> 1.5; // 1
	// 字符串
	echo "a" <=> "a"; // 0
	echo "a" <=> "b"; // -1
	echo "b" <=> "a"; // 1

5.通过 define() 定义常量数组
	--Array 类型的常量现在可以通过 define() 来定义。在 PHP 5.6 中仅能通过 const 定义。
	define('ANIMALS', [
	    'dog',
	    'cat',
	    'bird'
	]);
	echo ANIMALS[1]; // 输出 "cat"

6.匿名类
	--现在支持通过 new class 来实例化一个 '匿名类'，这可以用来替代一些 '用后即焚' 的完整类定义。
	interface Logger {
	    public function log(string $msg);
	}
	class Application {
	    private $logger;
	    public function getLogger(): Logger {
	         return $this->logger;
	    }
	    public function setLogger(Logger $logger) {
	         $this->logger = $logger;
	    }
	}
	$app = new Application;
	$app->setLogger(new class implements Logger {
	    public function log(string $msg) {
	        echo $msg;
	    }
	});
	var_dump($app->getLogger());
	输出:
	object(class@anonymous) (0) {}


7. Unicode codepoint 转译语法
	----这接受一个以16进制形式的 Unicode codepoint，并打印出一个双引号或heredoc包围的 UTF-8 编码格式的字符串。 可以接受任何有效的 codepoint，并且开头的 0 是可以省略的。
	echo "\u{aa}";
	echo "\u{0000aa}";
	echo "\u{9999}";

8. Closure::call()
	--Closure::call() 现在有着更好的性能，简短干练的暂时绑定一个方法到对象上闭包并调用它。
	class A {private $x = 1;}
	// PHP 7 之前版本的代码
	$getXCB = function() {return $this->x;};
	$getX = $getXCB->bindTo(new A, 'A'); // 中间层闭包
	echo $getX();
	// PHP 7+ 及更高版本的代码
	$getX = function() {return $this->x;};
	echo $getX->call(new A);


9. 为unserialize() 提供过滤 
	--这个特性旨在提供更安全的方式解包不可靠的数据。它通过白名单的方式来防止潜在的代码注入。
	// 将所有的对象都转换为 __PHP_Incomplete_Class 对象
	$data = unserialize($foo, ["allowed_classes" => false]);
	// 将除 MyClass 和 MyClass2 之外的所有对象都转换为 __PHP_Incomplete_Class 对象
	$data = unserialize($foo, ["allowed_classes" => ["MyClass", "MyClass2"]);
	// 默认情况下所有的类都是可接受的，等同于省略第二个参数
	$data = unserialize($foo, ["allowed_classes" => true]);

10.IntlChar
	--新增加的 IntlChar 类旨在暴露出更多的 ICU 功能。这个类自身定义了许多静态方法用于操作多字符集的 unicode 字符。
	printf('%x', IntlChar::CODEPOINT_MAX);
	echo IntlChar::charName('@');
	var_dump(IntlChar::ispunct('!'));

11.预期
	-- 预期是向后兼用并增强之前的 assert() 的方法。 它使得在生产环境中启用断言为零成本，并且提供当断言失败时抛出特定异常的能力。
	-- 老版本的API出于兼容目的将继续被维护，assert() 现在是一个语言结构，它允许第一个参数是一个表达式，而不仅仅是一个待计算的 string 或一个待测试的 boolean 。
	ini_set('assert.exception', 1);
	class CustomError extends AssertionError {}
	assert(false, new CustomError('Some error message'));
	--关于这个特性的完整说明，包括如何在开发和生产环境中配置它，可以在 assert() 的 expectations section 章节找到。

12.Group use declarations
	--从同一 namespace 导入的 '类' '函数' 和 '常量' 现在可以通过单个 use 语句 一次性导入了。
	// PHP 7 之前的代码
	use some\namespace\ClassA;
	use some\namespace\ClassB;
	use some\namespace\ClassC as C;

	use function some\namespace\fn_a;
	use function some\namespace\fn_b;
	use function some\namespace\fn_c;

	use const some\namespace\ConstA;
	use const some\namespace\ConstB;
	use const some\namespace\ConstC;

	// PHP 7+ 及更高版本的代码
	use some\namespace\{ClassA, ClassB, ClassC as C};
	use function some\namespace\{fn_a, fn_b, fn_c};
	use const some\namespace\{ConstA, ConstB, ConstC};

13.生成器可以返回表达式
	-- 此特性基于 PHP 5.5 版本中引入的生成器特性构建的。 它允许在生成器函数中通过使用 return 语法来返回一个表达式 （'但是不允许返回引用值'）， 可以通过调用 Generator::getReturn() 方法来获取生成器的返回值， 但是这个方法只能在生成器完成产生工作以后调用一次。
	$gen = (function() {
	    yield 1;
	    yield 2;

	    return 3;
	})();
	foreach ($gen as $val) {
	    echo $val, PHP_EOL;
	}
	echo $gen->getReturn(), PHP_EOL;
	-- 在生成器中能够返回最终的值是一个非常便利的特性， 因为它使得调用生成器的客户端代码可以直接得到生成器（或者其他协同计算）的返回值， 相对于之前版本中客户端代码必须先检查生成器是否产生了最终的值然后再进行响应处理 来得方便多了。

14.Generator delegation
	-- 现在，只需在最外层生成其中使用 yield from， 就可以把一个生成器自动委派给其他的生成器， Traversable 对象或者 array。
	function gen()
	{
	    yield 1;
	    yield 2;

	    yield from gen2();
	}

	function gen2()
	{
	    yield 3;
	    yield 4;
	}

	foreach (gen() as $val)
	{
	    echo $val, PHP_EOL;
	}

15.整数除法函数 intdiv() 
	--新加的函数 intdiv() 用来进行 '整数的除法运算'。
	var_dump(intdiv(10, 3));

16.会话选项
	--session_start() 可以接受一个 array 作为参数， '用来覆盖 php.ini 文件中设置的 会话配置选项'。
	--在调用 session_start() 的时候， 传入的选项参数中也支持 'session.lazy_write' 行为， 默认情况下这个配置项是打开的。它的作用是控制 PHP 只有在会话中的数据发生变化的时候才 写入会话存储文件，如果会话中的数据没有发生改变，那么 PHP 会在读取完会话数据之后， 立即关闭会话存储文件，不做任何修改，可以通过设置 read_and_close 来实现。
	--例如，下列代码设置 session.cache_limiter 为 private，并且在读取完毕会话数据之后马上关闭会话存储文件。
	session_start([
	    'cache_limiter' => 'private',
	    'read_and_close' => true,
	]);

17.preg_replace_callback_array()
	-- 在 PHP 7 之前，当使用 preg_replace_callback() 函数的时候， 由于针对每个正则表达式都要执行回调函数，可能导致过多的分支代码。 而使用新加的 preg_replace_callback_array() 函数， 可以使得代码更加简洁。
	-- 现在，可以使用一个关联数组来对每个正则表达式注册回调函数， 正则表达式本身作为关联数组的键， 而对应的回调函数就是关联数组的值。

18.CSPRNG Functions 
	--新加入两个跨平台的函数： random_bytes() 和 random_int() 用来产生高安全级别的随机字符串和随机整数。

19.可以使用 list() 函数来展开实现了 ArrayAccess 接口的对象
	-- 在之前版本中，list() 函数不能保证 正确的展开实现了 ArrayAccess 接口的对象， 现在这个问题已经被修复。


20.其他特性

?>