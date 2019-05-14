import React, { Component } from 'react';
import Home from './Pages/Home';
import Wall from './Pages/Wall';
import NavBar from './Pages/NavBar';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      	<Wall/>
      	<NavBar/>
      </div>
    );
  }
}

export default App;
