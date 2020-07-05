import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav class="navbar fixed-top navbar-expand-md px-0" id="navbar">
      <a class="navbar-brand ml-3 ml-md-5" href="#intro">
        <img alt="logo" src="./assets/img/logo.png" />
      </a>
      <button
        class="navbar-toggler mr-3"
        type="button"
        data-toggle="collapse"
        data-target="#mainListDiv"
        aria-controls="mainListDiv"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navTrigger navbar-toggler-icon">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </button>
      <div class="collapse navbar-collapse p-5 p-md-0 " id="mainListDiv">
        <ul class="navbar-nav ">
          <li class="nav-item m-2 d-md-none">
            <a class="nav-link " href="#intro">
              Top
            </a>
          </li>
          <li class="nav-item m-2">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li class="nav-item m-2">
            <a class="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li class="nav-item m-2">
            <a class="nav-link" href="#projects">
              Project
            </a>
          </li>
          <li class="nav-item m-2">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
