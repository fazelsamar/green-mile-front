import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Maps from "./Components/MakerMap/index";
import Layout from "./Layout/Layout";
import AddLocition from "./Pages/AddLocition";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Posts/Post";
import Posts from "./Pages/Posts";
import Register from "./Pages/register";

class App extends Component {
  async componentDidMount() {
    fetch(`${process.env.REACT_APP_URL_API}/v1/location/provinces/`).then(resp=>resp.json()).then(resps=>{
      this.setState({states:resps})
    })
    if (localStorage.getItem("token")) {
      this.setState({ login: true });
    }
  }

  state = {
    login: true,
    post: '',
    states:'',

    posts: []
  };
  setPosts = async (state) => {
    await fetch(`${process.env.REACT_APP_URL_API}/v1/posts/?province__title=${state}`).then(resp => {
      return resp.json()
    }).then(resps => {
      this.setState({ posts: resps })
    })
  }

  render() {
    return (
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<Home states={this.state.states} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:state/:id" element={<Post getPost={this.setPost} post={this.state.post} />} />
            <Route path="/posts/:name" element={<Posts setPosts={this.setPosts} posts={this.state.posts} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/addlocition"
              element={
                <AddLocition
                  hasLogin={this.state.login}
                  states={this.state.states}
                />
              }
            />
            <Route
              path="/Map"
              element={
                <Maps hasLogin={this.state.login} states={this.state.states} />
              }
            />
          </Routes>
        </Layout>
      </Router>
    );
  }
}

export default App;
