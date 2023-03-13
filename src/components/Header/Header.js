import React from "react";
import { NavLink } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const newLocal = "/";
  return (
    <div className="header">
      <NavLink to={"/"}>
        <div className="logo">Movies App</div>
      </NavLink>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
