import React from 'react';
import './navbar.css'

const NavBar = () => {
  return (
    <nav id="navbar" class="nav">
      <ul class="nav-list">
        <li>
          <a href="#welcome-section">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
