<?php


foreach循环

>>>格式1
{foreach item=value from=$info}
	{$value.title}<br>
	{$value.author}<br>
	{$value.content}<br>
	<hr>
{foreachelse}
变量值为空
{/foreach}

>>>格式2(PHP原生态)
{foreach $info as $value}
	{$value.title}<br>
	{$value.author}<br>
	{$value.content}<br>
	<hr>
{foreachelse}
变量值为空
{/foreach

section循环
{section name=i loop=$info start=1 max=2}
	{$info[i]['title']}<br>
	{$info[i]['author']}<br>
	{$info[i]['content']}<br>
	<hr>
{/section}

section, sectionelse
--功能多，参数多。但个人感觉并不实用。是smarty循环擦操作的函数之一
--除了name和loop属性外，还有
> start 循环执行的初始位置，如果为负数，开始位置从数组尾部算起
> step 循环的步长 如step为2 只遍历 0、2、4... step为负 从后向前遍历
> Max 设定循环的最大执行次数
> show 设定是否显示该循环






?>