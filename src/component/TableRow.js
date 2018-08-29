import React , { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class TableRow extends Component {

	constructor(props){
		super(props)
		this.state = {
			msg: ''
		}

		this.deleteUser = this.deleteUser.bind(this)
	}

	deleteUser(){
		var data = {
			id: this.props.obj.id
		}

		fetch('/user/delete', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then(function(res){
			if (res.status >= 400) {
				throw new Error("Bad response from server")
			}

			return res.json()
		})
		.then(function(data){
			if(data === "success"){
				this.setState({msg: "User has been deleted."})
			}
		})
		.catch(function(err){
			console.log(err)
		})
	}

	render() {
	    return (
	        <tr>
	          <td>
	            {this.props.obj.id}
	          </td>
	          <td>
	            {this.props.obj.nama}
	          </td>
	          <td>
	            {this.props.obj.email}
	          </td>
	          <td>
	            {this.props.obj.negara}
	          </td>
	          <td>
	            <Link to={"/edit/"+this.props.obj.id} className="btn btn-outline-primary">Edit</Link>&nbsp;
	            <a onClick={() => this.deleteUser()}>Delete</a>
	          </td>
	        </tr>
	    );
	}

}

export default TableRow;