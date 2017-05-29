<?PHP
// 函数的复用
// --单独引用
include('不存在的文件');  // 警告 忽略继续执行
require('不存在的文件');  // 致命错误 停止执行

// --路径引用
set_include_path('文件夹');
include('无路径的文件名称');
//
get_include_path('太复杂，以后再说');

ini_set(varname, newvalue);


?>