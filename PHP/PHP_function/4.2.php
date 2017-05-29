<?PHP
// 嵌套函数
// 单层嵌套
// 多层嵌套
// 嵌套效果？
// 应用场景？
// 参数的传递？

function out() {
	echo "out, \n";
	function in() {
		echo "in,  \n";
	}
}
out();
// out();
in();

function _out() {
	echo "_out, \n";
	function _mid() {
		echo "_mid, \n";
		function _in() {
			echo "_in, \n";
		}
	}
}
// _in();  // Fatal error: Call to undefined function _in()
_out();



?>