Python爬虫
	轻量级爬虫：不需要登录的静态网页的抓取
	1.简单爬虫架构
	2.URL管理器
	3.网页下载器 `（urllib2)`
	4.网页解析器 `（beautifulSoup)`

爬虫：自动访问互联网并提取数据的程序

简单爬虫架构：
	爬虫调度端--->{url管理器--->网页下载器
	                 |            |
	                 |----->网页解析器--->价值数据}