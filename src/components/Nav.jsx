import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClapperboard,
  faGear,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setCurrentPage, currentPage }) => {
  return (
    <nav className="sidebar">
      <h4 className="sidebar__title">Menu</h4>
      <div className="sidebar__top">
        <Link to="/" onClick={() => setCurrentPage("/")}>
          <div
            className={`sidebar__option ${
              currentPage === "/" && "sidebar__option--active"
            }`}
          >
            <FontAwesomeIcon
              icon={faHouse}
              className={`sidebar__option--icon ${
                currentPage === "/" && "active-icon"
              }`}
            />
            <p
              className={`sidebar__option--title ${
                currentPage === "/" && "active-title"
              }`}
            >
              Home
            </p>
          </div>
        </Link>
        <Link to="/movies" onClick={() => setCurrentPage("/movies")}>
          <div
            className={`sidebar__option ${
              currentPage === "/movies" && "sidebar__option--active"
            }`}
          >
            <FontAwesomeIcon
              icon={faClapperboard}
              className={`sidebar__option--icon ${
                currentPage === "/movies" && "active-icon"
              }`}
            />
            <p
              className={`sidebar__option--title ${
                currentPage === "/movies" && "active-title"
              }`}
            >
              Movies
            </p>
          </div>
        </Link>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__option no-cursor">
          <FontAwesomeIcon icon={faGear} className="sidebar__option--icon" />
          <p className="sidebar__option--title">Settings</p>
        </div>
        <div className="sidebar__option no-cursor">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="sidebar__option--icon"
          />
          <p className="sidebar__option--title">Help</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
