var mysql = require('mysql')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'tugas_nodejs'
})

module.exports = connection;