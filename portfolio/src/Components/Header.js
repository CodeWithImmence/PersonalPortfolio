import React from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list" />
      <div className="profile-img">
        <img
          src="../img/my-profile-img.jpg"
          alt=""
          className="img-fluid rounded-circle"
        />
      </div>
      <a
        className="logo d-flex align-items-center justify-content-center"
        to="/"
      >
        <h1 className="sitename">Rajai Vishal</h1>
      </a>
      <div className="social-links text-cennter">
        <a href="https://x.com/" className="twitter">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="#" className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="goole-plus">
          <i className="bi bi-skype"></i>
        </a>
        <a href="#" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
