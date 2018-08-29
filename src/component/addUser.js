import React , { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class addUser extends Component {

	constructor(props){
		super(props);
		this.state = {
			nama: '',
			email: '',
			negara: '',
			message: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.logChange = this.logChange.bind(this);
	}

 	componentDidMount(){
 		document.title = "Tambah Data User";
 	}

 	handleSubmit(e){
 		e.preventDefault()

 		var data = {
 			nama: this.state.nama,
 			email: this.state.email,
 			negara: this.state.negara,
 		}

 		fetch('/add/user', {
 			method: "POST",
 			headers: {'Content-Type': 'application/json'},
 			body: JSON.stringify(data)
 		})
 		.then(function(res){
 			if (res.status >= 400) {
 				throw new Error("Bad response from server");
 			}
 			return res.json();
 		})
 		.then(function(data){
 			if (data === "success") {
 				this.setState({ message: 'Anda telah berhasil menambahkan data user !' })
 			}
 		})
 		.catch(function(err){
 			console.log(err)
 		})
 	}

 	logChange(e){
 		this.setState({[e.target.name]: e.target.value});
 	}

	render() {
	    return (
	      <div>
	      	
	      	<div className="container">

	      		<div className="card">
	      			<div className="card-body">

	      				<h1>Tambah Data User</h1>
	      				<Link to="/">Kembali</Link><hr/>

		                <form method="post" onSubmit={this.handleSubmit}>
		                	<div className="form-group">
		                		<label htmlFor="nama">Nama Lengkap</label><br/>
		                		<input type="text" name="nama" id="nama" className="form-control" onChange={this.logChange} placeholder="Nama Lengkap"/>
		                	</div><br/>
		                	<div className="form-group">
		                		<label htmlFor="email">Email</label><br/>
		                		<input type="text" name="email" id="email" className="form-control" onChange={this.logChange} placeholder="Email"/>
		                	</div><br/>
		                	<div className="form-group">
		                		<label htmlFor="negara">Negara</label><br/>
		                		<input type="text" name="negara" id="negara" className="form-control" onChange={this.logChange} placeholder="Negara"/>
		                	</div><br/>
		                	<div className="form-group">
		                		<button className="btn btn-outline-info">Simpan</button>
		                	</div>
		                </form>

	      			</div>
	      		</div>

	      	</div>

	      </div>
	    )
	}

}

export default addUser;