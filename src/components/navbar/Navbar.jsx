import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="navlinks">
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
              <NavLink to="/workout">
                <li>Workout</li>
              </NavLink>
              <NavLink to="shop">
                <li>Shop</li>
              </NavLink>
              <NavLink to="contact">
                <li>Contact</li>
              </NavLink>
              <NavLink to="trainers">
                <li>Trainers</li>
              </NavLink>
            </ul>
            <button
              className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <i class="fa-sharp fa-solid fa-circle-xmark fa-xs"></i>
              ) : (
                <i class="fa-solid fa-bars fa-xs"></i>
              )}
            </button>
          </div>
          <div className="navlogo">
            <i class="fa-solid fa-dumbbell"></i>
          </div>
          <div className="navitems">
            <ul>
              <li>
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <li>
                <i class="far fa-user"></i>
              </li>
              <li>
                <i class="far fa-heart"></i>
              </li>
              <li>
                <i class="fal fa-shopping-cart"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
