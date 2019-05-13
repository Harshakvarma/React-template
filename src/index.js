import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Paperbase from './modules/dashboard/Paperbase';
import Index from './modules/landing/Home';
import Privacy from './modules/landing/Privacy';
import ForgotPassword from './modules/login/ForgotPassword';
import SignIn from './modules/login/SignIn';
import SignUp from './modules/login/SignUp';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={Paperbase} />
        <Route path="/landing" component={Index} />
        <Route path="/privacy" component={Privacy} />

        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
