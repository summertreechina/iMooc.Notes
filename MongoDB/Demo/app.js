let express = require('express')
let path = require('path')
let port    = process.env.PORT || 17333
let app     = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components/')))
app.listen(port)

console.log(`nn, I coming!\n port : ${port}`)

// 路由

// index page
app.get('/', function(req, res){
	res.render('index', {
		title : '甜甜她小妈'
		movies: []
	})
})

// detail page
app.get('/movie/:id', function(req, res){
	res.render('detail', {
		title : '细节'
	})
})

// admin page
app.get('/admin/movie', function(req, res){
	res.render('admin', {
		title : '管理员'
	})
})

// list page
app.get('/admin/list', function(req, res){
	res.render('list', {
		title : '列表'
	})
})





































