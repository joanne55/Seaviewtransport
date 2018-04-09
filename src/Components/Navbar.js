import React, { Component } from 'react';
import './App.css';
import Logo from '../Images/logo.png';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="m-0 p-0 row navbar navbar-expand-sm container-fluid navbar-light bg-light">
          <img className="col-sm-2" src={Logo} />
          <h2 className="col-sm-3">Seaview Transport</h2>
          <div className="col-sm-3"></div>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="col-sm-4 collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav nav-tabs navbar-right">
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
