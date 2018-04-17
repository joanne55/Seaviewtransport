import React, { Component } from 'react';
import './App.css';
import Logo from '../Images/logo_ed.png';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary position-fixed pb-md-0 pt-md-0">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <img src = {Logo}  height = "30" className= "d-inline-block align-top" alt = "" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link js-scroll-trigger" href="#about">About<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#feature">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#service">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
          <span className="navbar-text">
             <div><span className="fa fa-phone fa-fw"></span>62850688</div>
            <div> <span className="fa fa-envelope fa-fw"></span>SVSHJLL@singnet.com.sg</div>
            <div> <span className="fa fa-map-marker fa-fw"></span>3 Defu Lane 6 Singapore 539366</div>
          </span>
        </div>
      </nav>
      
    )
  }
}

export default Navbar
