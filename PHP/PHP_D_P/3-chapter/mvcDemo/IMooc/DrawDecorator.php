<?php
// 装饰器模式 接口文件
namespace IMooc;

interface DrawDecorator
{
	function beforeDraw();
	function afterDraw();
}

接口还可以定义更多的功能。
在画布绘制之前和之后来调用接口所设定的功能。
结构上有点像观察者模式


?>