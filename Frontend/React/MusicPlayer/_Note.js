我们能学到什么？
	也就是学习之后我们应该掌握什么？
	1 webpack的基础理解以及如何使用
	2 开发环境的搭建
	3 React的思想以及熟练运用React
	4 实际开发中的一些最佳实践

2-1 Webpack学习
	`https://segmentfault.com/a/1190000006178770`,
	Webpack
		`什么是Webpack`
			WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。
		`WebPack和Grunt以及Gulp相比有什么特性`
			其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。
	Webpack dev server
	常用插件

	搭建开发环境步骤：
		1 新建 package.json
			在哪儿建？
				在项目根目录
			怎么建？
				使用终端 npm init 命令 命令执行过程中按照提示进行 直至配置文件生成
		2 package.json 配置文件中尚缺少 `dependencies`依赖信息，怎么办？我们一般不会去手写。
			本项目依赖React，我们要安装React，项目根目录终端执行 `npm install react --save`， 在当前目录生成node_modules目录及文件
				--save 是指将依赖信息写入到 package.json 文件中
				--`npm install -g webpack` 是全局安装。一般不这样，每个项目都可以使用最新版本的webpack。
				"devDependencies" 配置文件自动填写 执行 `npm install react --save-dev`
					'dependencies'与'devDependencies'的区别：devDependencies下列出的模块，是我们开发时用的依赖项，像一些进行单元测试之类的包，比如grunt-contrib-uglify，我们用它混淆js文件，它们不会被部署到生产环境。dependencies下的模块，则是我们生产环境中需要的依赖，即正常运行该包时所需要的依赖项。
		3 通过 package.json 文件安装依赖文件？使用场景？
			在 package.json 所在文件夹执行 `npm install` npm命令会直接在当前目录中找 package.json 文件并读取安装
		4 创建 webpack.config.js 默认的配置文件名
		5 在入口文件中创建测试代码后，项目根目录中执行 `webpack` 进行打包
