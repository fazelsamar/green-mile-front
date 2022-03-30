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

export default Login;
