

Vue 实例

模板语法
	插值
		Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令
		使用 JavaScript 表达式
			每个绑定都只能包含单个表达式
				{{ var a = 1 }} 不会生效
	指令
		指令 (Directives) 是带有 v- 前缀的特殊属性。
			指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
				<p v-if="seen">现在你看到我了</p> 这里，v-if 指令将根据表达式 seen 的值的真假来插入/移除 <p> 元素。
	参数
		一些指令能够接收一个“参数”，在指令名称之后以冒号表示。
			<a v-bind:href="url">...</a> 在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。
	修饰符
		修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
	缩写
		v-bind 缩写
		v-on 缩写
计算属性和观察者
	计算属性
		模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护
			<div id="example">
				{{ message.split('').reverse().join('') }}
			</div>
			'所以，对于任何复杂逻辑，你都应当使用计算属性'
		计算属性缓存 vs 方法
			你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果
			??
				然而，不同的是计算属性是基于它们的依赖进行缓存的
					计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
		计算属性 vs 侦听属性
			Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。
		计算属性的 setter
	侦听器
Class 与 Style 绑定
	???
	可以用 v-bind 处理.不过，字符串拼接麻烦且易错。so...
	对象语法

组件
	什么是组件？
	使用组件
		全局注册?
		局部注册?
		DOM 模板解析注意事项?
			<table>
			  <my-row>...</my-row>
			</table>
			自定义组件 <my-row> 会被当作无效的内容，因此会导致错误的渲染结果。变通的方案是使用特殊的 'is' 特性:??
				<table>
				  <tr is="my-row"></tr>
				</table>
			应当注意，如果使用来自以下来源之一的'字符串模板'，则没有这些限制：
				<script type="text/x-template">
		data 必须是函数???
		组件组合??
		使用 Prop 传递数据??
			子组件要显式地用 'props 选项' 声明它预期的数据：
				Vue.component('child', {
				  // 声明 props
				  props: ['message'],
				  // 就像 data 一样，prop 也可以在模板中使用
				  // 同样也可以在 vm 实例中通过 this.message 来使用
				  template: '<span>{{ message }}</span>'
				})
		camelCase vs. kebab-case?? 驼峰式命名 和 短横线分隔式命名
			HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)：
		动态 Prop
		

























