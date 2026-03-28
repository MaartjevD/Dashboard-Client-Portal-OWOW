import React from "react";
import "../shared/styles/global.css";

export default function TopNavbar() {
  return (
    <nav className="top-navbar">
      <div className="top-navbar-left">
        <h2>OWOW Dashboard</h2>
      </div>
      <div className="top-navbar-right">
        <a href="#">Home</a>
        <a href="#">Clients</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
}
