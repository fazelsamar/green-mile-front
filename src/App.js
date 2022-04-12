import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Maps from "./Components/MakerMap/index";
import Layout from "./Layout/Layout";
import AddLocition from "./Pages/AddLocition";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Posts/Post";
import Posts from "./Pages/Posts";
import Register from "./Pages/register";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({login: true});
    }
  }

  state = {
    login: true  ,
    states: [
{
  "provinceName": "اردبيل",
  "provinceId": "24"
},
{
  "provinceName": "اصفهان",
  "provinceId": "10"
},
{
  "provinceName": "البرز",
  "provinceId": "30"
},
{
  "provinceName": "ايلام",
  "provinceId": "16"
},
{
  "provinceName": "آذربايجان شرقی",
  "provinceId": "03"
},
{
  "provinceName": "آذربايجان غربی",
  "provinceId": "04"
},
{
  "provinceName": "بوشهر",
  "provinceId": "18"
},
{
  "provinceName": "تهران",
  "provinceId": "23"
},
{
  "provinceName": "چهارمحال وبختياری",
  "provinceId": "14"
},
{
  "provinceName": "خراسان جنوبی",
  "provinceId": "29"
},
{
  "provinceName": "خراسان رضوی",
  "provinceId": "09"
},
{
  "provinceName": "خراسان شمالی",
  "provinceId": "28"
},
{
  "provinceName": "خوزستان",
  "provinceId": "06"
},
{
  "provinceName": "زنجان",
  "provinceId": "19"
},
{
  "provinceName": "سمنان",
  "provinceId": "20"
},
{
  "provinceName": "سيستان وبلوچستان",
  "provinceId": "11"
},
{
  "provinceName": "فارس",
  "provinceId": "07"
},
{
  "provinceName": "قزوين",
  "provinceId": "26"
},
{
  "provinceName": "قم",
  "provinceId": "25"
},
{
  "provinceName": "كردستان",
  "provinceId": "12"
},
{
  "provinceName": "كرمان",
  "provinceId": "08"
},
{
  "provinceName": "كهگيلويه وبويراحمد",
  "provinceId": "17"
},
{
  "provinceName": "کرمانشاه",
  "provinceId": "05"
},
{
  "provinceName": "گلستان",
  "provinceId": "27"
},
{
  "provinceName": "گيلان",
  "provinceId": "01"
},
{
  "provinceName": "لرستان",
  "provinceId": "15"
},
{
  "provinceName": "مازندران",
  "provinceId": "02"
},
{
  "provinceName": "مرکزی",
  "provinceId": "00"
},
{
  "provinceName": "هرمزگان",
  "provinceId": "22"
},
{
  "provinceName": "همدان",
  "provinceId": "13"
},
{
  "provinceName": "يزد",
  "provinceId": "21"
}],
    
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
          {name: "هتل", img:''},
          {name: "پمپ بنزین", img:''},
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
          {name: "هتل", img:''},
          {name: "پمپ بنزین",img:''},
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
          <Route path="/addlocition" element={ <AddLocition hasLogin = {this.state.login} states ={this.state.states} /> } />
          <Route path="/Map" element={ <Maps hasLogin = {this.state.login} states ={this.state.states} /> } />
          </Routes>
          </Layout>
      </Router>
    );
    }
}

export default App;
