import React from "react";
import "../shared/styles/global.css";
import searchIcon from "./Pictures/searchIcon.png";

export default function TopNavbar() {
  return (
    <nav className="top-navbar">
      <div className="top-navbar-left">
        <div className="navbarSearchIcon">
          <img src={searchIcon} className="search-icon" />
          <input
            type="text"
            placeholder="Search projects, documents, updates..."
            className="navbar__search-input"
          />
        </div>
      </div>
      s<div className="top-navbar-right"></div>
    </nav>
  );
}
