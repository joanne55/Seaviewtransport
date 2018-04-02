import React, { Component } from 'react'
class About extends Component {
    render() {
        return (
            <section className="about-us">
                <div class="container">
                    <div class="about-title">
                        <h1>
                            About Us
                        </h1>
                        <div classname>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm p-2">
                            <img src="/Images/abort.jpg" alt="About" />
                        </div>
                        <div class="col-sm p-5">
                            <h4>
                                Seaview Transport started in 1993, handling the separation and recycling of waste 
                                (e.g. waste, plastic, stones, papers, steel and scrap metals).
                                With over 20 years of experience, you can trust our reliable and experienced team 
                                with a fleet of trucks to resolve your waste management needs efficiently.
                            </h4>
                        </div>
                    </div>
                </div>
                <div classname="getQuotes">
                    <div class="card text-white bg-primary m-3">
                        <div class="card-body">
                            <h5 class="card-title">Act Now</h5>
                            <p class="card-text">We cater to your needs for a personal service, let us know your prefered time , location and other requests</p>
                            <a href="#" class="btn btn-primary">Get a Quotes</a>
                        </div>
                    </div>
                </div>
            <div classname="features">
                <div class="card-group ml-3 mr-3">
                    <div class="card">
                            <img class="card-img-top" src="/images/flexible.png" alt="flexible" />
                            <div class="card-body">
                                <h5 class="card-title">Flexible</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="/images/reliable.png" alt="reliable" />
                                <div class="card-body">
                                    <h5 class="card-title">Reliable</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="/images/available.png" alt="vailable" />
                                    <div class="card-body">
                                        <h5 class="card-title">24 hr Available</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}