import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import FlightInfo from '../containers/FlightInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route path='/submit/flight-info' component={FlightInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
