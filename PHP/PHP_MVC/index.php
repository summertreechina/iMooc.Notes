<?php
// 单一入口文件

require_once('./function.php');
require_once('./config.php');

$view = ORG('smarty', 'Smarty', $smarty_params);

$allow_contr = ['index', 'test'];
$allow_method = ['show', 'test', 'index'];

$contr_name = daddslashes($_GET['controller']);
$contr_name = in_array($contr_name, $allow_contr) ? $contr_name : 'test';

$method_name = daddslashes($_GET['method']);
$method_name = in_array($method_name, $allow_method) ? $method_name : 'show';

// echo $contr_name . "<br/>";
// echo $method_name . "<br/>";

C($contr_name, $method_name);



?>