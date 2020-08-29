import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Searchpage from './Components/Movies/Searchpage'

ReactDOM.render(
  <Router>
    <Switch>
      <Redirect exact from='/' to='/nomify-u'/>
      <Route exact path='/nomify-u' component={App}></Route>
      <Route exact path='/Search' component={Searchpage}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
