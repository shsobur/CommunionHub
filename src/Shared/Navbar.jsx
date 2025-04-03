import "../Style/Navbar.css";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main_navbar_outer_container">
        <div className="main_navbar_inner_container">
          <div className="navbar_image_outer_container">
            <img src={logo} alt="logo" />
            <span>ommunionHub</span>
          </div>

          <div className="main_navbar_navigation_container">
            <div
              id="main_navbar_navigate_route_container"
              className={
                isOpen
                  ? "#main_navbar_navigate_route_container isActive"
                  : "#main_navbar_navigate_route_container"
              }
            >
              <ul onClick={handleIsOpen}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/event">Event</NavLink>
                </li>
                <li>
                  <NavLink>About</NavLink>
                </li>
              </ul>
            </div>

            <div onClick={handleIsOpen} className="navbar_menu_container">
              {isOpen ? (
                <h3>
                  <FcMenu />
                </h3>
              ) : (
                <h3>
                  <RxCross1 />
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
