import React, {Component} from "react";
import {FormLogin, FormLoginDiv, InputsType, InputSubmit} from "./LoginElem";

class Login extends Component {
  state = {};
  render() {
    return (
      <FormLoginDiv>
        <h3>ورود</h3>
        <FormLogin>
        <InputsType type='text' placeholder="نام کاربری :" />
        <InputsType type='password' placeholder="کلمه عبور :" />
        <InputSubmit type='submit' value='ورود' />
        </FormLogin>
      </FormLoginDiv>
    );
  }
}

export default Login;
