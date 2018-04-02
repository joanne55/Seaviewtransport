import React, { Component } from 'react';
import './App.css';

import Pic1 from './Images/download1.jpg';
import Pic2 from './Images/download2.jpg';
import Pic3 from './Images/download3.jpg';
import Pic4 from './Images/download4.jpg';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
        <div class="navbar-header">
          <h2 className="nav-text">Seaview Transport</h2>
        </div>
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

        <div className="container-fluid">
          <div className="carousel slide" id="myCarousel" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="img-responsive" src={Pic1} />
              </div>
              <div className="carousel-item">
                <img className="img-responsive" src={Pic2} />
              </div>
              <div className="carousel-item">
                <img className="img-responsive" src={Pic3} />
              </div>
              <div className="carousel-item">
                <img className="img-responsive" src={Pic4} />
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
