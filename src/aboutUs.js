import React, { Component } from 'react'
import ImgAbout from './Images/about.JPG'
import ImgAvailable from './Images/available.png'
import ImgFlexible from './Images/flexible.png'
import ImgReliable from './Images/reliable.png'

class AboutUs extends Component {
    render() {
        return (
            <section className="about-us">
                <div className="container">
                    <div className="about-title text-center">
                        <h1>
                            About Us
                        </h1>
                        <div className="title-sep">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm p-5">
                            <img src={ImgAbout} height="200" />
                        </div>
                        <div className="col-sm p-5">
                            <p>
                                Seaview Transport started in 1993, handling the separation and recycling of waste 
                                (e.g. waste, plastic, stones, papers, steel and scrap metals).
                                With over 20 years of experience, you can trust our reliable and experienced team 
                                with a fleet of trucks to resolve your waste management needs efficiently.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="getQuotes">
                    <div className="card text-white bg-primary m-3">
                        <div className="card-body">
                            <h5 className="card-title">Act Now</h5>
                            <p className="card-text">We cater to your needs for a personal service, let us know your prefered time , location and other requests</p>
                            <div className="text-right">
                                <a href="#" className="btn btn-light">Get a Quotes</a>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="features">
                <div className="card-group ml-3 mr-3 text-center">
                    <div className="card">
                            <img className="card-img-top" src={ImgFlexible} alt="flexible" />
                            <div className="card-body">
                                <h5 className="card-title">Flexible</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={ImgReliable} alt="reliable" />
                                <div className="card-body">
                                    <h5 className="card-title">Reliable</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={ImgAvailable} alt="available" />
                                    <div className="card-body">
                                        <h5 className="card-title">24 hr Available</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default AboutUs