<?php 
// 队列
// 与桶底完全相反
// 排队打饭
// 先排队的先吃饭 最后排队的最后吃饭
// --enqueue(); 阿 Q，辫子，排队
// --dequeue(); 删除
$obj = new SplQueue();
$obj->enqueue('a');
$obj->enqueue('b');
$obj->enqueue('c');
print_r($obj);
	// [0] => a
	// [1] => b
	// [2] => c
 ?>