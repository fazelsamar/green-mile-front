import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import AddLocition from "./Pages/AddLocition";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Post";
import Posts from "./Pages/Posts";
import Register from "./Pages/register";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({login: true});
    }
  }

  state = {
    login: false,
    states: ["یزد", "تهران", "مشهد", "هرزمگان", "مازندران", "شیراز"],
    
    posts: [
      {
        id: 1,
        caption : 'مکان زیبا برای مسافرت',
        title : 'شهر میبد',
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
          {user: "مهرداد خندان", commnet: "بسیار عالی"},
          {user: "فاضل", commnet: "مکان زیبایی بود"},
        ],
      },
      {
        id: 1,
        caption : 'مکان زیبا برای مسافرت',
        title : 'شهر میبد',
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
          {user: "مهرداد خندان", commnet: "بسیار عالی"},
          {user: "فاضل", commnet: "مکان زیبایی بود"},
        ],
      },
    ],
  };
  render() {
    return (
      <Router>
        <Layout hasLogin={this.state.login}>
        <Routes>
          <Route path="/" element={<Home states={this.state.states} /> } />
          <Route path="/login" element={ <Login hasLogin ={this.state.login} /> } />
          <Route path="/post" element={ <Post post ={this.state.posts[0]} /> } />
          <Route path="/posts" element={ <Posts posts= {this.state.posts} /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/addlocition" element={ <AddLocition /> } />
          </Routes>
          </Layout>
      </Router>
    );
  }
}

export default App;
