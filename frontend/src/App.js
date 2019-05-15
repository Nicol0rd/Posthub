import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Route exact={true} path = "/" component={LandingPage}/>
          <Route exact={true} path = "/home" component={HomePage}/>    
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
