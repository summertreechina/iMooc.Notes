let express = require('express')
let port    = process.env.PORT || 17333
let app     = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.listen(port)

console.log(`nn, I coming!\n port : ${port}`)














































