import React, { Component } from 'react';
import './App.css';
import Pic1 from '../Images/DSCF3982.JPG';
import Pic2 from '../Images/DSCF3968.JPG';
import Pic3 from '../Images/DSCF3989.JPG';
import Pic4 from '../Images/IMG_2113_new.jpeg';

class Carousel extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0">       
                <div className="carousel slide" id="myCarousel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner" id="carousel_borders">
                        <div className="carousel-item active text-center">
                            <img className="img-responsive" src={Pic1} alt="" />
                        </div>
                        <div className="carousel-item text-center">
                            <img className="img-fluid img-responsive" src={Pic2} alt="" />
                        </div>
                        <div className="carousel-item text-center">
                            <img className="img-fluid" src={Pic3} alt="" />
                        </div>
                        <div className="carousel-item text-center">
                            <img className="img-fluid" src={Pic4} alt="" />
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
            </div>
        )
    }
}

export default Carousel
