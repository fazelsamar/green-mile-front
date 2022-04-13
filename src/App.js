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
  async componentDidMount(state) {


    if (localStorage.getItem("token")) {
      this.setState({ login: true });
    }
  }

  state = {
    login: true,
    post: '',
    states: [
      {
        provinceName: "اردبيل",
        provinceId: "24",
      },
      {
        provinceName: "اصفهان",
        provinceId: "10",
      },
      {
        provinceName: "البرز",
        provinceId: "30",
      },
      {
        provinceName: "ايلام",
        provinceId: "16",
      },
      {
        provinceName: "آذربايجان شرقی",
        provinceId: "03",
      },
      {
        provinceName: "آذربايجان غربی",
        provinceId: "04",
      },
      {
        provinceName: "بوشهر",
        provinceId: "18",
      },
      {
        provinceName: "تهران",
        provinceId: "23",
      },
      {
        provinceName: "چهارمحال وبختياری",
        provinceId: "14",
      },
      {
        provinceName: "خراسان جنوبی",
        provinceId: "29",
      },
      {
        provinceName: "خراسان رضوی",
        provinceId: "09",
      },
      {
        provinceName: "خراسان شمالی",
        provinceId: "28",
      },
      {
        provinceName: "خوزستان",
        provinceId: "06",
      },
      {
        provinceName: "زنجان",
        provinceId: "19",
      },
      {
        provinceName: "سمنان",
        provinceId: "20",
      },
      {
        provinceName: "سيستان وبلوچستان",
        provinceId: "11",
      },
      {
        provinceName: "فارس",
        provinceId: "07",
      },
      {
        provinceName: "قزوين",
        provinceId: "26",
      },
      {
        provinceName: "قم",
        provinceId: "25",
      },
      {
        provinceName: "كردستان",
        provinceId: "12",
      },
      {
        provinceName: "كرمان",
        provinceId: "08",
      },
      {
        provinceName: "كهگيلويه وبويراحمد",
        provinceId: "17",
      },
      {
        provinceName: "کرمانشاه",
        provinceId: "05",
      },
      {
        provinceName: "گلستان",
        provinceId: "27",
      },
      {
        provinceName: "گيلان",
        provinceId: "01",
      },
      {
        provinceName: "لرستان",
        provinceId: "15",
      },
      {
        provinceName: "مازندران",
        provinceId: "02",
      },
      {
        provinceName: "مرکزی",
        provinceId: "00",
      },
      {
        provinceName: "هرمزگان",
        provinceId: "22",
      },
      {
        provinceName: "همدان",
        provinceId: "13",
      },
      {
        provinceName: "يزد",
        provinceId: "21",
      },
    ],

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
