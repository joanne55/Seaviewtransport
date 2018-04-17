import React, { Component } from 'react';
import './App.css';
import otc from '../Images/otc.jpg';
import cradle from '../Images/cradle.jpg';

class Services extends Component {
    render() {
        return (
            <section className="m-0 p-0" id="service">
                <div className="service-main-title">
                    <h1 className="service-title">Services</h1>
                    <p className="service-title-txt text-left">
                        Seaview Transport firmly believes in being an integrated waste service provider known for its safe, 
                        reliable and customer facing operations. With skilled and knowledgeable hands on deck coupled with customer oriented attitude,
                        you can be assured of our commitment to your needs.
                    </p>
                </div>
                <div className="waste-box">
                    <h2 className="waste-title">
                        Waste Type
                    </h2>
                    <p>We specialise in disposing many different types of waste.</p>
                    <div className="waste-type container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="waste-type-img soil">
                                    
                                </div>
                                <div className="waste-type-txt"><p>Soil</p></div>
                            </div>
                            <div className="col-md-3">
                                <div className="waste-type-img hardcore">
                                    
                                </div>
                                <div className="waste-type-txt"><p>Hardcore</p></div>
                            </div>
                            <div className="col-md-3">
                                <div className="waste-type-img construction">
                                    
                                </div>
                                <div className="waste-type-txt"><p>Construction</p></div>
                            </div>
                            <div className="col-md-3">
                                <div className="waste-type-img horticulture">
                                    
                                </div>
                                <div className="waste-type-txt"><p>Horticulture</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bin-type">
                    <h2 className="bin-title">Bin types</h2>
                    <div className="bin-title-txt text-center">We use most cost-effective and green way and frequency to dispose your waste materials</div>
                    <div className="row">
                        <div className="col-md-6 m-0 pt-md-4 text-center" >
                            <img src={otc} height="400" alt="" />
                        </div>
                        <div className="col-md-6 bin-type-box">
                            <h3 className="bin-type-txt">OTC</h3>
                            <p>(16ft x 8ft x 4ft)</p>
                            <p className="bin-type-txt-desc">Open-top container (OTC) can be used to contain most waste - horticulture, 
                                bulky items, construction and demolition materials, earth, sand, plastic and mixed refuse materials. 
                                Widely used in most manufacturing, construction, renovation and commercial projects.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 bin-type-box">
                            <h3 className="bin-type-txt">Cradle bin</h3>
                            <p>(10ft x 5ft x 5ft)</p>
                            <p className="bin-type-txt-desc">Suitable for collecting various waste such as office and food waste. 
                                Widely used in schools, office buildings, shopping centres, condominiums, 
                                landed properties and light industrial estates. All mobile garbage bins are equipped with a cover, 
                                keeping the surrounding environment clean. 
                            </p>
                        </div>
                        <div className="col-md-6 m-0 pt-md-5 text-center">
                            <img src={cradle} height="400" alt="" />
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Services