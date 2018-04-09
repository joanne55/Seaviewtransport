import React, { Component } from 'react';
import './App.css';
import Logo from '../Images/logo.png';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="no-padding">
        <nav className="row navbar navbar-expand-sm container-fluid bg-light">
          <img className="col-sm-2 img-responsive" src={Logo} />
          <h2 className="col-sm-3">Seaview Transport</h2>
          <div className="col-sm-3"></div>
          <ul className="col-sm-4 row navbar-nav nav-tabs navbar-right">
            <li className="col-sm-4 nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="col-sm-4 nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="col-sm-4 nav-item">
              <a className="nav-link" href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
