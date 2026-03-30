import React from "react";
import "../shared/styles/global.css";
import searchIcon from "./Pictures/searchIcon.png";
import notificationBell from "./Pictures/bell.png";

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

      <div className="navbar-right">
        <div className="top-navbar-right">
          <div className="langSwitch">
            <button className="active">EN</button>
            <button>NL</button>
          </div>
        </div>

        <div className="notification">
          <img src={notificationBell} className="Bell" />
        </div>

        <div className="profile">
          <img src="https://i.pravatar.cc/40" className="Avatar" />
          <span className="name">Jennifer Lopez</span>
          <span className="arrow">▾</span>
        </div>
      </div>
    </nav>
  );
}
