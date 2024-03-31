import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { NAVBAR_ITEMS, NAVBAR_OPTIONS } from "../../static";
import navLogo from "../../assets/images/nav-logo.svg";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar-1">
        <div className="container">
          <div className="nav-top">
            <div className="nav-menu">
              <RiMenu2Fill />
            </div>
            <ul className="nav-list">
              {NAVBAR_ITEMS?.map((el) => (
                <li key={el.id} className="nav-item">
                  {el.title}
                  {el.icon}
                </li>
              ))}
            </ul>
            <div className="nav-number">
              <IoCallOutline />
              <p>+123 ( 456 ) ( 7890 )</p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar-2">
        <div className="container">
          <div className="nav-all">
            <div className="nav-logo">
              <img src={navLogo} alt="" />
            </div>
            <div className="nav-input">
              <input type="text" placeholder="Search For items..." />
              <select name="" id="">
                <option value="">All Categories</option>
              </select>
              <button>
                <IoIosSearch />
              </button>
            </div>
            <ul className="navbar-list">
              {NAVBAR_OPTIONS?.map((el) => (
                <li key={el.id} className="navbar-items">
                  {el.icon}
                  {el.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
