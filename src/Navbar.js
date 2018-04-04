import React, { Component } from 'react';
import './App.css';
import Pic1 from './Images/DSCF3982.JPG';
import Pic2 from './Images/DSCF3968.JPG';
import Pic3 from './Images/DSCF3989.JPG';
import Pic4 from './Images/IMG_2113.JPG';
import Logo from './Images/logo.png';

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

        <div className="container-fluid">
          <div className="carousel slide" id="myCarousel" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="img-fluid" src={Pic1} />
              </div>
              <div className="carousel-item">
                <img className="img-fluid" src={Pic2} />
              </div>
              <div className="carousel-item">
                <img className="img-fluid" src={Pic3} />
              </div>
              <div className="carousel-item">
                <img className="img-fluid" src={Pic4} />
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar
