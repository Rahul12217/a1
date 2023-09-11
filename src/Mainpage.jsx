import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import "./Mainpage.css";

const Mainpage = () => {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="mianpage">
      <div className="navbar">
        <h1>Air Ticket</h1>
        <div className="links">
          <a href="/mainpage">Home</a>
          <a href="/userschedule">Flight Schedule</a>
          <a href="/mytickets">My Tickets</a>
          <a href="/profile">Profile</a>
          <a href="/" onClick={logout}>Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
