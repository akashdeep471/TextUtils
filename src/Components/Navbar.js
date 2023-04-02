import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleTheme("primary")}} style={{height: '20px',width: '20px'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleTheme("warning")}} style={{height: '20px',width: '20px'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleTheme("success")}} style={{height: '20px',width: '20px'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleTheme("danger")}} style={{height: '20px',width: '20px'}}></div>
            <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleTheme("dark")}} style={{height: '20px',width: '20px'}}></div>
            <div className="bg-light rounded mx-2" onClick={()=>{props.toggleTheme("light")}} style={{height: '20px',width: '20px'}}></div>
          </div> */}
          <div className={`form-check mx-2 form-switch text-${props.theme==='light'?'dark':'light'}`}>
  <input className="form-check-input"  onClick={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeBtnText}</label>
</div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired, about: PropTypes.string };

Navbar.defaultProps = {title:"Set Title Here",about:"About"};
