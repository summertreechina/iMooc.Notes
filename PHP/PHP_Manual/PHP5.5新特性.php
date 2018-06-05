<?php
>>>PHP 5.5 新特性

1. 生成器 yield 关键字
function xrange($start, $limit, $step = 1) {
    for ($i = $start; $i <= $limit; $i += $step) {
        yield $i;
    }
}

foreach (xrange(1, 9, 2) as $number) {
    echo "$number ";
}

2. finally关键字
这个和java中的finally一样，经典的 try ... catch ... finally 三段式异常处理。

3. foreach 支持list()
$array = [
    [1, 2, 9],
    [3, 4, 10],
];
 
foreach ($array as list($a, $b, $c)) {
    echo "A: $a; B: $b C: $c \n";
}

4. empty() 支持自定义函数了
function foo(){
    return false;
}
 
if(empty(foo())){
    echo 11;
} else {
    echo 12;
}

5. 非变量array和string也能支持下标获取了
echo array(1, 2, 3)[0];
echo [1, 2, 3][0];
echo "foobar"[2];

6. 类名通过::class可以获取
namespace Name\Space;
class ClassName {}
echo ClassName::class;

7. 增加了opcache扩展
使用opcache会提高php的性能，你可以和其他扩展一样静态编译（--enable-opcache）或者动态扩展（zend_extension）加入这个优化项。



?>