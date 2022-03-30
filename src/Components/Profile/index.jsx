import React from "react";
import {DivElemProile, DivPhoto, PhotoProfile} from "./ProfileElement";
import profiles from '../../images/WhatsApp Image 2022-02-02 at 22.49.38.jpeg'
const Profile = () => {
  return (
    <DivElemProile>
      <DivPhoto>
        <PhotoProfile src={profiles} alt="" />
      </DivPhoto>
    </DivElemProile>
  );
};

export default Profile;
