import React from "react";
import { Outlet } from "react-router-dom";

const Profile = ({login}) => {
  return (
    <>
      <p>[Profile]</p>
      <Outlet />
    </>
  );
}

export default Profile;