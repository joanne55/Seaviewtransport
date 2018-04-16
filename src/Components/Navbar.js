import React, { Component } from 'react';
import './App.css';
import Logo from '../Images/SeaviewLogo.png';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  Expand() {
    document.getElementById("button1").style.color = "red";
  }

  render() {
    return (
      <div>
        <nav className="row m-0 p-0 navbar navbar-expand-lg navbar-light">
          <img className="navbar-brand navbar-header col-sm-2 col-xs-6 m-0 p-0" id="logo" src={Logo} />
          <h2 className="navbar-brand col-sm-3 m-0 p-0" id="brand">Seaview Transport</h2>

          <div className="col-sm-3" id="div_space"></div>

          <button className="navbar-toggler navbar-header" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick="Expand()">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="col-sm-4 col-xs-6 navbar-right collapse navbar-collapse m-0 p-0" id="collapsibleNavbar">
            <ul className="row navbar-nav navbar-right container-fluid m-0 p-0">
              <li className="col-md-4 nav-item active">
                <button className="nav-link btn btn-primary navbar-btn" id="button1">
                  <a href="#about_us">About us</a>
                </button>
              </li>
              <li className=" col-md-4 nav-item">
                <button className="nav-link btn btn-primary navbar-btn">
                  <a href="#services">Services</a>
                </button>
              </li>
              <li className="col-md-4 nav-item">
                <button className="nav-link btn btn-primary navbar-btn">
                  <a href="#contact">Contact us</a>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
