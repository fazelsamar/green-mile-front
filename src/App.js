import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

class App extends Component {
  componentDidMount() {}

  state = {};
  render() {
    return (
      <Router>
        <Layout>
<<<<<<< HEAD
         <Login/>
        </Layout>;
=======
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
>>>>>>> 9595297ce1b1bc0b26c37488f2a7e428a5fcf9a8
      </Router>
    );
  }
}

export default App;
