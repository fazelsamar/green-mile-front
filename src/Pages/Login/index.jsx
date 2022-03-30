<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from "react";
import auth from "../../servieces/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  });

  const doSubmit = async () => {
    if (await auth.login(user)) navigate("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {
    user[input.name] = input.value;
    setUser(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      Login
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <input type="submit" value="ورود" />
    </form>
  );
};
>>>>>>> 9595297ce1b1bc0b26c37488f2a7e428a5fcf9a8

export default Login;
