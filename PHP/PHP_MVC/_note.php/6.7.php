<?php
>>>1.什么是smarty的插件
--smarty的插件本质上是function函数

>>>2.smarty插件的常用类型
	'funcitons' 函数插件
	'modifiers' 修饰插件 变量调节器插件
	'block funcitons' 区块函数插件

>>>3.如何来制作、使用插件
(1) 使用registerPlugin方法注册写好的自定义函数
(2) 将写好的插件放入Smarty解压目录中的lib目录下的plugins目录里
(3) php的内置函数, 可以自动以修饰插件 (变量调节器插件)的形式在模板里使用

插件函数命名：smarty_插件类型_函数名字（）
插件文件命名：插件类型.插件名字.php
//注意插件名字与插件函数名字一致

函数插件调用格式:
{函数名 参数1=参数值 参数2=参数值 参数3=参数值}

smarty模版(name.tpl)内使用php内置函数格式：
{variable|function_name:value1:value2:value3}
自定义函数使用前需要在name.php注册后，才能在smarty模版(name.tpl)内使用自定义函数：
注册使用registerPlugin函数：registerPlugin('function','注册函数名',‘自定义函数名');
自定义函数在name.tpl使用：
{注册函数名(registername) 参数1(parameter)=值1(value) 参数2(parameter)=值2(value)}
除了php内置函数，自定义函数可以作为插件来使用。
插件：插件是尊重原有系统结构，可以自由的在原结构上增加、去除但不影响原结构的函数。
插件分类：函数插件(function)、修饰函数插件(modifier function)、区块函数插件(block function)
插件文件存放在smarty目录下的lib目录下的plugins目录里，等同于使用注册函数registerplugin。
插件文件命名规范：插件分类(function或modifier或block).插件名(注册函数名).php。(文件保存在smarty/lib/plugin)
插件函数定义在function.name.php
插件函数定义命名规范：function smarty_插件分类_插件名或注册函数名($value){
   return $value['a']*$value['b'];
}
插件定义好后在name.tpl直接使用。






?>