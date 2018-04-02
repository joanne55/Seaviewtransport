import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
        <h2>Seaview Transport</h2>
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
        </nav>

        <div className="container-fluid">
        <div className="carousel slide" id="myCarousel" data-ride="carousel">
        <ol className="carousel-indicators">
        <li className="active" data-target="#myCarousel" data-slide-to="0" ></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        </div>

        <div className="carousel-inner">
        <div className="item active">
          <img src="https://reservations.ryder.com/-/media/reservation/images/vehicleimages/straighttruck/04a_straighttruck.ashx" />
        </div>
        <div className="item">
          <img src="images/download2" />
        </div>
        <div className="item">
          <img src="images/download3" />
        </div>
        <div className="item">
          <img src="images/download4" />
        </div>
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

export default App
