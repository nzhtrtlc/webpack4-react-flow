import React from "react";
import ReactDOM from "react-dom";
import 'layout/style/main.scss';
import Header from 'Components/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from 'layout/screens/Login';
import PrivateRoute from 'routes/PrivateRoute';

if (module.hot) {
  module.hot.accept();
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/public'>Public Page</Link>
        </li>
        <li>
          <Link to='/protected'>Protected Page</Link>
        </li>
      </ul>
      <Route path='/public' component={Public} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/protected' component={Protected} />

        <Header />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));