<?php
>>>smarty模版的引用
include 方法，和 php 里的 include 差不多
{include file="tpl_路径.tpl" title="网址标题" table_bgcolor="#颜色"}
Smarty的文件引用
{include file="header.tpl" sitename="慕课网"}
1. file 为引入文件路径
2.可以传递自定义参数( sitename )给引入的文件。
3.传递的参数只在引入的文件中可用，不能用于其他文件。
4.引入的文件中有同名变量且有值,传递的参数将覆盖原有变量值.






?>