import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableRow from './component/TableRow';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  componentDidMount(){

    document.title = "List Data User";

    fetch('/user')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  tabRow(){
    return this.state.users.map(function(object, i){
      return <TableRow obj={object} key={i} />;
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
              <div className="card-body">

                <h1>Users</h1>

                <Link to="/add/user" className="btn btn-outline-success">Add Data</Link><hr/>

                    <table className="table table-striped" border="1">
                    <thead>
                      <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Negara</td>
                        <td>Opsi</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.tabRow()}
                    </tbody>
                  </table>

              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
