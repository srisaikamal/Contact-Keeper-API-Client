import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ title, icon }) => {
  return (
    <div>
      <div className="navbar bg-primary">
        <h2>
          <i className={icon}></i> {title}
        </h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
