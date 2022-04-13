import React from "react";
import {DivElemProile, DivPhoto, PhotoProfile} from "./ProfileElement";
import profiles from '../../images/WhatsApp Image 2022-02-02 at 22.49.38.jpeg'
const url = 'http://127.0.0.1:8000'
const Profile = () => {
  return (
    <DivElemProile>
      <DivPhoto>
        <PhotoProfile src={`${url}${localStorage.getItem("profile_pic")}`} alt="" />
      </DivPhoto>
    </DivElemProile>
  );
};

export default Profile;
