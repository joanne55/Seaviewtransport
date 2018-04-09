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
        <nav className="row navbar navbar-expand container-fluid navbar-light bg-light">
          <img className="col-sm-2 img-responsive" src={Logo} />
          <h2 className="col-sm-3">Seaview Transport</h2>
          <div className="col-sm-3"></div>

          <div className="collapse navbar-collapse navbar-toggler">
          <ul className="col-sm-4 navbar-nav nav-tabs">
            <li className= "nav-item active">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className= "nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className= "nav-item">
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
