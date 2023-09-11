import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import "./Adminpage.css";
import Mainpage from "./Mainpage";

const AdminPage = () => {
  return (
    <>
    <div className="adminpage">
      <div className="navbar">
          <h1>Air Ticket</h1>
        <div className="links">
          <a href="/admin">Home</a>
          <a href="/schedule">Flight Schedule</a>
          <a href="/users">Users</a>
          <a href="/tickets">Tickets</a>
          <a href="/">Logout</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminPage;
