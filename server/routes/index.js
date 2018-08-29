var express = require('express')
var conn = require('../config/database.js')
var router = express.Router()

// menagmbil data user
router.get('/user', function(req, res, next){
	conn.query('SELECT * FROM user ORDER BY id DESC', function(err, rows){
		if (err) throw err;
		res.send(JSON.stringify(rows));
	})
})

// menambahkan user baru
router.post('/add/user', function(req, res) {

	const nama = req.body.nama;
	const email = req.body.email;
	const negara = req.body.negara;

	const sql = "INSERT INTO user(nama, email, negara) VALUES('"+ nama +"', '"+ email +"', '"+ negara +"')";

	conn.query(sql, function(err, result){
		if(err) throw err;

		res.send(JSON.stringify(result));
	})
})

// mengambil data user berdasarkan id pada url (digunakan untuk edit)
router.get('/users/:id', function(req, res, next){
	var id = req.params.id
	conn.query('SELECT id, nama, email, negara FROM user WHERE id = "'+ id +'" ', function(err, rows){
		if (err) throw err;
		res.send(JSON.stringify(rows));
	})
})

// mengedit data user
router.post('/update/users', function(req, res, next){

	var sql = 'UPDATE user SET nama = "'+ req.body.nama +'", email = "'+ req.body.email +'", negara = "'+ req.body.negara +'" WHERE id = "'+ req.body.id +'" ';

	conn.query(sql, function(err, rows){
		if (err) throw err;
		res.send(JSON.stringify(rows));
	})
})

// menghapus data user
router.post('/user/delete', function(req, res, next){
	var sql = "DELETE FROM user WHERE id = '"+req.body.id+"' ";

	conn.query(sql, function(err, rows){
		if(err) throw err;

		res.send(JSON.stringify(rows))
	})
})

module.exports = router;