<?PHP
// 参数的默认值
// 默认值必须是由常量或者是常量表达式的形式存在
// 编译机制，缺省值、默认值必须放在后面
function greet_to_someone($name, $is_formal=false) {
	$r = $is_formal ? 'Hello,' : 'Hi,';
	echo $r, $name, "\n";
}

greet_to_someone('Lily');
greet_to_someone('Lily', true);
?>