import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";

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
