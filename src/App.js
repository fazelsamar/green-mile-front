import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Post";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({login: true});
    }
  }

  state = {
    login: false,
    posts: [
      {
        id: 1,
        sleep: false,
        state: "یزد",
        typeOfArea:'جنگل',
        addres: "میبد",
        locition: "12,44",
        welfareAmenities: [
          {name: "هتل", info: "برای استراحت . هزینه نسبتا خوبی داره"},
          {name: "پمپ بنزین", info: "بنزین و گاز"},
        ],
        like: 23,
        commnets: [
          {user: "مهرداد خندان", commnet: "بسیاز عالی"},
          {user: "فاضل", commnet: "مکان زیبایی بود"},
        ],
      },
    ],
  };
  render() {
    return (
      <Router>
        <Layout>
          <Post post = {this.state.posts[0]} />
        </Layout>
      </Router>
    );
  }
}

export default App;
