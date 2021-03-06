import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{border:"none"}}
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} style={{color:"white"}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
              <Link className="nav-link" to="/">HOME </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="#">
                About me
              </a> */}
               <Link className="nav-link" to="/about">about </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" aria-current="page" href="#">
                Services
              </a> */}
               <Link className="nav-link" to="/services">Services </Link>

            </li>
            {/* <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
