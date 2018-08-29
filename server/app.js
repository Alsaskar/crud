var express = require('express')
var bodyParser = require('body-parser')
var index = require('./routes/index')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', index)

app.listen(4000)

module.exports = app;