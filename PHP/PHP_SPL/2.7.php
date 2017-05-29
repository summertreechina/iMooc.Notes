<?php
马克·扎克伯格 Mark Elliot Zuckerberg Facebook
// 堆栈的代码实现
// --bottom() ?
// --top() ?
// --offsetSet();
// --rewind();
$stack = new SplStack();
$stack->push('a');
$stack->push('b');
$stack->push('f');
$stack->push('g');
$stack->push('h');
// print_r($stack);
	// SplStack Object
	// (
	//     [flags:SplDoublyLinkedList:private] => 6
	//     [dllist:SplDoublyLinkedList:private] => Array
	//         (
	//             [0] => a
	//             [1] => b
	//             [2] => c

	//             [6] => g
	//             [7] => h
	//         )
	// )
	// --输出结果中的“6”表示“先进后出”
// echo $stack->bottom(). "\n";
// echo $stack->top(). "\n";
	// a
	// h
// $stack->offsetSet(0, 'X');
// offset=0是top所在的位置 相当于水桶口的位置
// print_r($stack);
	// [0] => a
	// [1] => b
	// [2] => c
	// [3] => d
	// [4] => e
	// [5] => f
	// [6] => g
	// [7] => X
// $stack->rewind();
// echo $stack->current();
	// X
	// 结果于“双向列表”相反 rewind指向筒口
// $stack->next();
// echo $stack->current();
	// g
	// next()指向桶底

// 遍历堆栈
$stack->rewind();
while ( $stack->valid()) {
	echo $stack->key(). '=>' .$stack->current(). "\n";
	$stack->next();
}
	// 4=>h
	// 3=>g
	// 2=>f
	// 1=>b
	// 0=>a
// 删除堆栈数据
$stack->rewind();
while ( $stack->valid()) {
	$stack->pop();
	$stack->next();
}
print_r($stack);
	// Array
	//         (
	//         )






 ?>