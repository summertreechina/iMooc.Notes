<?PHP
强类型参数
class / interface name >> PHP 5.0
array >> PHP 5.1
callable >> PHP 5.4
bool, float, int, string >> PHP 7.0

declare (strict_types = 1);
declare 所有的形参必须与指定的类型一致的声名
function sum_1($a, $b) {
	echo $a + $b, "\n";
}
sum_1(3, 5); // 8
sum_1(3.5, 6); // 9.5
sum_1(3.9, 6);

function sum_2(int $a, int $b) {
	echo $a + $b;
}
$a = 2;
$b = 6;
sum_2($a, $b);
sum_2(3, 5); // 8
sum_2(3.5, 6); // 9.5
sum_2(3.9, 6);

生成器的语法
function gen_one_to_three() {
    for ($i = 1; $i <= 6; $i++) {
        //注意变量$i的值在不同的yield之间是保持传递的。
        yield $i;
    }
}

$generator = gen_one_to_three();

foreach ($generator as $value) {
    echo "$value\n";
}


echo phpinfo();
?>