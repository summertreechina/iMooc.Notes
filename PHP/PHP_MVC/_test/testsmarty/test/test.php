<?php
require_once( "../libs/Smarty.class.php");


$smarty = new Smarty();

// 五配置两方法
$smarty->left_delimiter  ="{";			//左定界符
$smarty->right_delimiter ="}";			//右定界符
$smarty->template_dir    ="tpl";		//html模板的位置
$smarty->compile_dir     ="template_c"; //模板编译生成的文件目录
$smarty->cache_dir       ="cache";		//缓存目录
// $smarty->caching         =true;			//开始缓存
// $smarty->cache_lifetime  =120;			//缓存时间

$smarty->assign('articleTitle', '文章标题');

// $arr = [
// 	'title' => 'smarty学习',
// 	'author' => '小明',
// ];
// 		支持!		但是assign()不能分配两次

$arr = array(
	'title' => 'smarty学习',
	'author' => '小明'
);
$smarty->assign('arr', $arr);

$smarty->display('test.tpl');

?>