import React, { useState } from "react";
import "../css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-nav">
      <div className="container">
        <div className="row">
          <nav>
            
              <Link to="/" className="title">
                <img
                  src="//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2018/02/logo.svg"
                  alt="Specto"
                />
              </Link>
              <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            
              <ul className={menuOpen ? "open" : ""}>
                <li className="active-main">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/whatsOn">WHAT'S ON</NavLink>
                </li>
                <li>
                  <NavLink to="/news">NEWS</NavLink>
                </li>
                <li>
                  <NavLink to="/shortCodes">SHORTCODES</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">CONTACT US</NavLink>
                </li>
              </ul>
            
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
