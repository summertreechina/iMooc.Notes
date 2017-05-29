<!-- http://www.codeceo.com/article/php-closures.html -->
<?php
>>PHP的闭包函数
>>>>匿名函数&闭包函数(closures)&可变函数

$func = function($param) {
	echo $param. "\n";
};
$func("a");

例一 
1.在函数里定义一个匿名函数，并且调用它 
function printStr() {
	$fun = function($par) {
		echo $par. "\n";
	};
	$fun("在函数里定义一个匿名函数，并且调用它");
}
printStr();

例二 
2.在函数中把匿名函数返回，并且调用它 
function getPrintStrFunc() {
	$foo = function($str) {
		echo $str. "\n";
	};
	return $foo;
}
$printStrFunc = getPrintStrFunc();
$printStrFunc("在函数中把匿名函数返回，并且调用它");

例三 
3.把匿名函数当做参数传递，并且调用它
function callFunc($foo) {
	$foo('把匿名函数当做参数传递，并且调用它');
}
$printStrFunc = function($str) {
	echo $str. "\n";
};
callFunc($printStrFunc);

1.连接闭包和外界变量的关键字：USE;
2.闭包可以保存'所在代码块上下文的一些变量和值'
3.PHP在默认情况下，匿名函数不能调用所在代码块的上下文变量，而需要通过使用use关键字

function getMoney() { 
    $rmb = 1; 
    $dollar = 6; 
    $func = function() use ( $rmb, $dollar ) { 
        echo $rmb. "\n"; 
        echo $dollar. "\n"; 
    }; 
    $func(); 
} 
getMoney(); 

1.作用域
function getMoney() { 
    $rmb = 1; 
    $func = function() use ( $rmb ) { 
        echo $rmb; 
        $rmb++; 
    }; 
    $func(); 
    echo $rmb; 
} 
getMoney();
2.作用域
function getMoney() { 
    $rmb = 1; 
    $func = function() use ( &$rmb ) { 
        echo $rmb;  
        $rmb++; 
    }; 
    $func(); 
    echo $rmb; 
} 
getMoney(); 

3.如果将匿名函数返回给外界
-匿名函数会保存use所引用的变量
-而外界则不能得到这些变量
-这样形成‘闭包’这个概念可能会更清晰一些。
function getMoneyFunc() { 
    $rmb = 1; 
    $func = function() use ( &$rmb ) { 
        echo $rmb; 
        //把$rmb的值加1 
        $rmb++; 
    }; 
    return $func; 
} 
$getMoney = getMoneyFunc(); 
$getMoney(); 
$getMoney(); 
$getMoney();

>>总结：










// $姚明 = array(
// 	'静态参数' => array(
// 		'身高' => '226',
// 		'体重' => '140.6',
// 		'鞋码' => '18',
// 		'易受伤情况' => '易',
// 		....
// 		),
// 	'专业能力' => array(
// 		'特长' => '20英尺外精确跳投',
// 		'速度' => '20英尺外精确跳投',
// 		'命中率' => '20英尺外精确跳投',
// 		'位置' => '中锋',
// 		'体能' => '中',
// 		'体能恢复期' => '15',
// 		'灵活指数' => '10',
// 		....
// 		),
// 	);

// function 运球() { return .... };
// function 传球() { return .... };
// function 投篮() { return .... };
// function ...() { return .... };

// function 运球($姚明) { return .... };


// class 一个人
// {
// 	$名字 = null;
// 	$形态 = null;
// 	$能力 = null;
// 	$特长 = null;
// 	....
	
// 	function 跑() { ....};
// 	function 跳() { ....};
// 	function 射击() { ....};
// 	function 站岗() { ....};
// 	....
// }

// 执行> $Obj_姚明 = new 一个人($姚明);
// 结果> $Obj_姚明 = class 一个人
// 		{
// 			$名字 = 姚明;
// 			$形态 = 高个子;
// 			$能力 = 射击;
// 			$特长 = 篮球;
// 			$智商 = 120;
// 			$射击命中率 = 80%;
// 			....
			
// 			function 跑() { ....};
// 			function 跳() { ....};
// 			function 射击() { ....};
// 			function 站岗() { ....};
// 			....
// 		}
// 让姚明冲锋> $Obj_姚明->跑();
// 让姚明射击> $Obj_姚明->射击();

?>
