import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../../Components/Back-home";
import Inputs from "./Inputs/Inputs";
import {
  DivFormInput,
  DivFormRegister,
  DivParentRegister,
  FormInput,
  FormRegister,
  LableForm,
  Submit,
} from "./RegisterElement";

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  const doSubmit = async () => {
    const formData = new FormData();
    for (var key in user) {
      formData.append(key, user[key]);
    }
    fetch(`${process.env.REACT_APP_URL_API}/v1/account/register/`, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.status == 201) {
        alert("ثبت نام موفقیت آمیز بود");
        navigate("/login");
      }
      if (response.status == 400) {
        alert("یوزری با این نام کاربری از قبل وجود دارد");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {
    user[input.name] = input.value;
    setUser(user);
  };

  const handleImgChange = (e) => {
    user[e.target.name] = e.target.files[0];
    setUser(user);
  };

  return (
    <DivParentRegister>
      <BackHome />
      <h2>ثبت نام :</h2>
      <DivFormRegister>
        <FormRegister onSubmit={handleSubmit}>
          <Inputs
            type="text"
            required
            value={user.first_name}
            change={handleChange}
            name="first_name"
            lable="نام"
          />
          <Inputs
            type="text"
            required
            value={user.last_name}
            change={handleChange}
            name="last_name"
            lable="نام خانوادگی"
          />
          <Inputs
            type="number"
            required
            value={user.phone_number}
            change={handleChange}
            name="phone_number"
            lable="شماره "
          />
          <Inputs
            type="text"
            required
            value={user.username}
            change={handleChange}
            name="username"
            lable="نام کاربری"
          />
          <Inputs
            type="password"
            required
            value={user.password}
            change={handleChange}
            name="password"
            lable="رمز عبور"
          />
          <Inputs
            type="file"
            accept="image/*"
            required
            value={user.profile_pic}
            change={handleImgChange}
            name="profile_pic"
            lable="تصویر پروفایل "
          />
          <DivFormInput>
            <Submit type="submit" value="ثبت نام" />
          </DivFormInput>
        </FormRegister>
      </DivFormRegister>
    </DivParentRegister>
  );
};

export default Register;
