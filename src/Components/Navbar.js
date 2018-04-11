import React, { Component } from 'react';
import './App.css';
import Logo from '../Images/SeaviewLogo.png';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="row m-0 p-0 navbar navbar-expand-sm container-fluid navbar-light bg-light">
          <img className="col-sm-2" id="logo" src={Logo} />
          <h2 className="col-sm-3 m-0 p-0" id="test">Seaview Transport</h2>

          <div className="col-sm-3"></div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="col-sm-4 collapse navbar-collapse m-0 p-0" id="collapsibleNavbar">
            <ul className="row navbar-nav nav-tabs navbar-right container-fluid m-0 p-0">
              <li className=" col-sm-4 nav-item">
                <a className="nav-link" href="#about_us">About us</a>
              </li>
              <li className=" col-sm-4 nav-item">
                <a className=" nav-link" href="#services">Services</a>
              </li>
              <li className="col-sm-4 nav-item">
                <a className=" nav-link" href="#contact_us">Contact us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
