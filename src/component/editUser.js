import React , { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class editUser extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			users: [],
			nama: '',
			email: '',
			negara: '',
			message: ''
		}

		this.logChange  = this.logChange.bind(this)
		this.handleEdit = this.handleEdit.bind(this)

	}

 	componentDidMount(){

 		document.title = "Edit Data User";

 		let self = this;

 		fetch('/users/'+this.props.match.params.id)
 		.then(res => {
 			if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
            return res.json();
 		})
 		.then(function(data){
 			const dataUser = data[0]
 			self.setState({
 				nama: dataUser['nama'],
 				email: dataUser['email'],
 				negara: dataUser['negara']
 			})
 		})
 		.catch(function(err){
 			console.log(err)
 		})
 	}

 	logChange(e){
 		this.setState({
 			[e.target.name]: e.target.value
 		})
 	}

 	handleEdit(e){
 		e.preventDefault();

 		var data = {
 			nama: this.state.nama,
 			email: this.state.email,
 			negara: this.state.negara,
 			id: this.props.match.params.id
 		}
 		
 		fetch('/update/users', {
 			method: 'POST',
 			headers: {
 				'Content-Type': 'application/json'
 			},
 			body: JSON.stringify(data)
 		})
 		.then(function(res){
 			if (res.status >= 400) {
 				throw new Error("Bad response from server")
 			}
 		})
 		.then(function(data){
 			if (data === "success") {
 				this.setState({message: "User berhasil di edit"})
 			}
 		})
 		.catch(function(err){
 			console.log(err)
 		})
 	}

	render() {
	    return (
	      <div>
	      	
	      	<div className="container">

	      		<div className="card">
	      			<div className="card-body">

	      				<h1>Edit Users</h1>
	      				<Link to="/">Kembali</Link><hr/>

		                <form method="post" onSubmit={this.handleEdit}>
		                	<div className="form-group">
		                		<label htmlFor="nama">Nama Lengkap</label><br/>
		                		<input type="text" name="nama" id="nama" value={this.state.nama} onChange={this.logChange} className="form-control"/>
		                	</div><br/>
		                	<div className="form-group">
		                		<label htmlFor="email">Email</label><br/>
		                		<input type="text" name="email" id="email" value={this.state.email} onChange={this.logChange} className="form-control"/>
		                	</div><br/>
		                	<div className="form-group">
		                		<label htmlFor="negara">Negara</label><br/>
		                		<input type="text" name="negara" id="negara" value={this.state.negara} onChange={this.logChange} className="form-control"/>
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

export default editUser;