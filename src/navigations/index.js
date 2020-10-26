import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar" class="nav">
      <ul class="nav-name">
        <Link to="/">NGAN KIM KHONG</Link>
      </ul>
      <ul class="nav-list">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/programming">Programming</Link>
        </li>
        <li>
          <Link to="/hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="/blogs">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
