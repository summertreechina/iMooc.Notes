<?php
创建Smarty block functions插件：在插件目录里新建文件 block.插件名.php文件（如 block.插件名.php），然后插件方法名字书写规范：
smarty_block_插件名($params ,$content){} 如截图所示;
调用方式:
{插件名:第一个参数=参数值 第二个参数=参数值 }
{要处理内容}
{/插件名}

{test2 replace='true' maxnum=29}
{$content}
{/test2}

插件命名不能重复！

在使用setPluginsDir的时候应该注意。它的作用是设置插件地址，在使用的时候应该以一个数组的形式把SMARTY_PLUGINS_DIR包括在里面，不然插件自动调用地址会只是你新设置的插件地址，这会导致系统自带的plugins下的插件都不能使用。所以推荐使用addPluginsDir属性来添加新的插件地址。





?>