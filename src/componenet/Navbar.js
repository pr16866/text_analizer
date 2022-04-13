import React from "react";
import "../App.css";
import PropTypes from "prop-types";
import { Link, Router } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
     
      <div>
        <nav
          className={`navbar navbar-expand-lg`}
          style={{backgroundColor:props.navmode,color:props.textcolor,width:"100%"}}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color:props.textcolor}}>
              Text Utilse
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" style={{color:props.textcolor}}>
                    {props.home}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" style={{color:props.textcolor}}>
                    {props.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <button type="button" class="btn btn-primary p-3 mx-1" onClick={props. setbluemode}></button>
            <button type="button" class="btn btn-success p-3 mx-1" onClick={props.setgreenmodefun}></button>
            <button type="button" class="btn btn-info p-3 mx-1" onClick={props.newcolorfun}></button>
            <div className="form-check form-switch mx-4">
              <input
                className="form-check-input"
                role="buthrefn"
                onClick={props.setmode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"style={{color:props.textcolor}}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.modeName}
              </label>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  home: "This is my home baby",
  contact: "This is my flat baby",
};
