<?php
>>>MVC的组成与运行原理
'view' 视图，能让我们直观的看到web界面，可以在浏览器看到html、xml、flash实现的页面。
'controller' 控制器，向系统发出指令的工具和帮手。
'Model' 模型，按要求从数据库取出数据（片面） '模型是整个MVC中最重要的一部分'
三者合一，创造出一个系统框架，让系统更好地运行。
MVC工作流程：
第一步：浏览者->调用控制器，对他发出指令。
第二步：控制器->按指令选取一个合适的模型。
第三步：模型在控制器得到指令后，取出相应数据。
第四步：控制器针对模型，再选取相应视图。
第五步：把第三步取出的数据按用户想要的样子显示出来。


?>