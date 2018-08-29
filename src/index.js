import React from 'react';
import ReactDOM from 'react-dom';
import {
 BrowserRouter as Router,
 Route
} from 'react-router-dom';
import App from './App';
import addUser from './component/addUser';
import editUser from './component/editUser';

ReactDOM.render(<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/add/user" component={addUser} />
			<Route path="/edit/:id" component={editUser} />
		</div>
	</Router>, document.getElementById('root'));
