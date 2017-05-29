<?PHP
// SplDoublyLinkedList类
// --unshift();
// --push();
// --rewind();	把节点指针指向bottom所在节点[0]
// --current();	获取节点指针指向的节点
// --prev(); 返回一个节点
// --valid();	如果当前是有效节点，return true
// --pop();	将Top位置节点从链表中删除，并返回
// --shift();	将bottom位置节点从链表中删除，并返回
$obj = new SplDoublyLinkedList();
$obj->push(1);
$obj->push(2);
$obj->push(3);
$obj->push('NanNan');
$obj->push('1.1.php');
$obj->unshift(9981);
print_r($obj);
$obj->rewind();
// echo 'current:' . $obj->current() . "\n";
$obj->next();
$obj->next();
//	prev();
$obj->prev();
$obj->next();
$obj->next();
$obj->next();
$obj->next();
$obj->next();
$obj->next();
//	--多次调用next至超出数组长度 打印出‘空’
echo 'next node:' . $obj->current() . "\n";
if ($obj->current()) {
	echo "Current node valid\n";
} else {
	echo "Current node inValid\n";
}
// 	valid();
$obj->valid();
// 
$obj->pop();
// 删除了'1.1.php'
$obj->shift();
// 删除了'9981'
print_r($obj);

?>