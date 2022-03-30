import axios from "axios";
import React, {Component} from "react";
import {FormLogin, FormLoginDiv, InputsType, InputSubmit} from "./LoginElem";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handelInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };
  submitForm = (e) => {
    e.preventDefault()
     axios.post("http://127.0.0.1:8000/v1/account/login/",{username: this.state.username,password: this.state.password}).then(resp=>{
       console.log(resp);
     });
  };
  render() {
    return (
      <FormLoginDiv>
        <FormLogin onSubmit={this.submitForm}>
          <InputsType
            value={this.state.username}
            name="username"
            onChange={this.handelInput}
            placeholder="نام کاربری :"
          />
          <InputsType
            value={this.state.password}
            name="password"
            onChange={this.handelInput}
            placeholder="کلمه عبور  :"
            type="password"
          />
          <InputSubmit value="ورود" type="submit" />
        </FormLogin>
      </FormLoginDiv>
    );
  }
}

export default Login;
