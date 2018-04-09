import React, { Component } from 'react';
import './App.css';
import Img1 from '../Images/ImgServices1.png';
import Img2 from '../Images/ImgServices2.png';
import Img3 from '../Images/ImgServices3.png';
import Img4 from '../Images/ImgServices4.png';
import Pic1 from '../Images/download1.jpg';
import Pic2 from '../Images/download2.jpg';

class Services extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="m-0 p-0">
                <h1 className="text-center">Services</h1>
                <p>Seaview Transport firmly believes in being an integrated waste service provider known for its safe, reliable and customer facing operations. With skilled and knowledgeable hands on deck coupled with customer oriented attitude, you can be assured of our commitment to your needs.</p>

                <h3>Waste types</h3>
                <p>We specialise in disposing many different types of waste, mainly industrial and construction types. Below is a list of, but not limited to, different waste types that we can take care of.</p>

                <div className="container-fluid m-0 p-0" id="carousel_wastes">
                    <div className="carousel slide" id="myCarousel" data-ride="carousel">               
                        <div className="carousel-inner" id="carousel_wastes2">
                            <div className="carousel-item active">
                                <img className="img-fluid ml-4 mr-4" src={Img1} />
                                <img className="img-fluid ml-4 mr-4" src={Img2} />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid ml-4 mr-4" src={Img3} />
                                <img className="img-fluid ml-4 mr-4" src={Img4} />
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

                <h2>Bin types</h2>

                <div className="row container-fluid">
                    <div className="col-sm-5 m-0 p-0">
                        <img className="img-fluid" src={Pic1} />
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-3">
                        <h3>OTC</h3>
                        <p>(16ft x 8ft x 4ft)</p>
                    </div>
                    <div className="col-sm-3"></div>
                </div>

                <div className="row container-fluid">
                    <div className="col-sm-5 m-0 p-0">
                        <img className="img-fluid" src={Pic2} />
                    </div>
                    <div className="col-sm-1"></div>
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