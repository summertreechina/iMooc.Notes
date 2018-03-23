讲师
fishenal

`第1章` 课程简介
	讲解课程安排，面象人群，以及对课程的项目做了效果演示。

`第2章` Vue简介
	对vue一些最基础的知识做了讲解：实例对象、vue组件以及vue的一些相关概念。

`第3章` 功能接口（1）
	对文本渲染`v-html`、`v-text`、列表渲染 `v-for` 数组，对象，子组件；
	列表数据的同步更新方法；vue标签属性和条件渲染；
	事件绑定-内置事件绑定、自定义事件绑定；
	表单事件绑定；
	计算属性和数据监听等进行了讲解。

`第4章` 功能接口（2）
	对组件之间通信；过渡动画：css实现过渡动画； JS实现过渡动画；自定义指令；插件；单文件组件等进行了讲解。

`第5章` 环境搭建和常用插件
	对vue-cli安装；ES6语法，vue-router，vuex状态管理进行了讲解。

`第6章` 项目实践-首页
	实现项目框架搭建，首页：信息列表，vue-resource实现Ajax获取信息数据，express启动数据服务、幻灯片组件、登录等讲解。

`第7章` 项目实践-购买详情页、订单列表
	对项目的添加路由，select选项组件，可多选项组件，数字组件，总价计算，选择择银行，订单列表做了详细的讲解。

`第8章` 课程扩展
	讲解vuex在定单列表页面的应用。

本课程已完结

>>>一些语法简写，关于ES6
	methods: {
		addItem: function() {

		},
		addItem () {

		},
		H : H(app),
		(H) => {
			return H(app);
		},
	},
	data: {
		name: name,
		name,
	}

	双向数据绑定，不是所有方法都能触发数据更新
	Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下
		push() pop() shift() unshift() splice()

	* 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

	当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
	当你修改数组的长度时，例如：vm.items.length = newLength
	Vue.set(example1.items, indexOfItem, newValue) // 26分钟
	example1.items.splice(indexOfItem, 1, newValue)
	`splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目`
﻿













