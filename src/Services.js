import React, { Component } from 'react';
import './App.css';
import Img1 from './Images/ImgServices1.png';
import Img2 from './Images/ImgServices2.png';
import Img3 from './Images/ImgServices3.png';
import Img4 from './Images/ImgServices4.png';

class Services extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">Services</h1>
                <p>Seaview Transport firmly believes in being an integrated waste service provider known for its safe, reliable and customer facing operations. With skilled and knowledgeable hands on deck coupled with customer oriented attitude, you can be assured of our commitment to your needs.</p>
                <h3>Waste types</h3>
                <p>We specialise in disposing many different types of waste, mainly industrial and construction types. Below is a list of, but not limited to, different waste types that we can take care of.</p>

                <div className="container-fluid" id="Carousel2">
                    <div className="carousel slide" id="myCarousel" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="row carousel-item active">
                                <img className="col-sm-12 img-fluid" src={Img1} />
                            </div>
                            <div className="row carousel-item">
                                <img className="col-sm-12 img-fluid" src={Img2} />
                            </div>
                            <div className="row carousel-item">
                                <img className="col-sm-12 img-fluid" src={Img3} />
                            </div>
                            <div className="row carousel-item">
                                <img className="col-sm-12 img-fluid" src={Img4} />
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

                <h2>Bin types</h2>
                <div className="row">
                    <div id="test" className="col-sm-4"><img className="img-fluid" src={Img2} /></div>
                    <div className="col-sm-2"></div>
                    <div id="test2" className="col-sm-3 justify-content-width">
                    <h3 className="col-sm-3">OTC
                        <p>(16ft x 8ft x 4ft)</p>
                        </h3>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"><img className="img-fluid" src={Img2} /></div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-3">
                        <h3>Cradle bin</h3>
                        <p>(10ft x 5ft x 5ft)</p>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        )
    }
}

export default Services