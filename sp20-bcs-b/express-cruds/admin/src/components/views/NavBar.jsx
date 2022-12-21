import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cars">Cars</Link>
      </li>
      <li>
        <a href="/cars">Cars WIth href</a>
      </li>
      {!localStorage.getItem("token") ? (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <a>Register</a>
          </li>
        </>
      ) : (
        <>
          <li>
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("token", "");
                window.location.replace("/login");
              }}
            >
              Logout
            </a>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavBar;
