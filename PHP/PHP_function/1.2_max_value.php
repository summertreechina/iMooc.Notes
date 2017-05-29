<?PHP
function get_max_value($arr_num) {
	$max_value = 0;
	// $max_value = $arr_num[0];
	// foreach ($arr_num as $value) {
	// 	if ($value > $max_value) {
	// 		$max_value = $value;
	// 	}
	// }
	// echo $max_value;
	foreach ($arr_num as $v) {
		$max_value = ($v > $max_value) ? $v : $max_value;
	}
	echo $max_value;
}

$arr_num = array(1,45,677,8888,55,'33',5898953,1909,203);
get_max_value($arr_num);   // 8888[Finished in 0.1s]

?>