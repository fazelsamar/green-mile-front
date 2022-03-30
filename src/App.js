import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home';

class App extends Component {
 
    componentDidMount() {
      
    }

    state = {}
    render() {
        return (
          <Router>

                <Home />

          
          </Router>
        );
    }
}

export default App;