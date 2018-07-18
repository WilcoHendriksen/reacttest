import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import Logout from './components/Logout'
import User from './components/User'
import NotFound from './components/NotFound'
import { AppProvider } from './components/AppProvider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppProvider>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/user/:username" component={User} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </Router>
        </AppProvider>
      </div>
    );
  }
}

export default App;
