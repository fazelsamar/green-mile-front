import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
// import Home from './Pages/Home';

// <Switch>
// <Route path="/">
//     <Home />
// </Route>
// </Switch>

class App extends Component {
  componentDidMount() {}

  state = {};
  render() {
    return (
      <Router>
        <Layout>
        <Login/>
        </Layout>;
      </Router>
    );
  }
}

export default App;
