import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchpage from './Components/Movies/Searchpage'
import Nominations from './Components/Movies/Nominations';

ReactDOM.render(
  <Router>
    <Switch>
      <Redirect exact from='/' to='/nomify-u'/>
      <Route exact path='/nomify-u' component={App}></Route>
      <Route exact path='/Search' component={Searchpage}></Route>
      <Route exact path ='/Nominations' component={Nominations}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
