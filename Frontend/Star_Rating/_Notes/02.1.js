>>> 第一种实现方式
----雪碧图、JS
	1. 一张雪碧图，以背景的方式显示星星
	2. 遍历星星
	3. 鼠标事件 mouseover click mouseout
	4. 


	1、HTML结构
	2、CSS样式
	3、JS行为




第一种组织方法
<ul id="rating" class="rating">
	<li class="rating-item" title="差劲"></li>
	<li class="rating-item" title="不好"></li>
	<li class="rating-item" title="一般"></li>
	<li class="rating-item" title="很好"></li>
	<li class="rating-item" title="太棒了"></li>
</ul>
第二种组织方法
<div id="rating" class="rating">
	<a href="javascript:;" class="rating-item" title="差劲"></a>
	<a href="javascript:;" class="rating-item" title="不好"></a>
	<a href="javascript:;" class="rating-item" title="一般"></a>
	<a href="javascript:;" class="rating-item" title="很好"></a>
	<a href="javascript:;" class="rating-item" title="太棒了"></a>
</div>