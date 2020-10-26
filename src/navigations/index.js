import React from 'react';
import './navbar.css'

const NavBar = () => {
  return (
    <nav id="navbar" class="nav">
        <ul class="nav-name">
          <a href="#name">NGAN KIM KHONG</a>
        </ul>
      <ul class="nav-list">
        <li>
          <a href="#welcome-section">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="">Hobbies</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
    </nav>

  );
}

export default NavBar;
