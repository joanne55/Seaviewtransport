import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="contact-top">
                </div>
                <div className="contact-box">
                    <div className="container">
                        <div className="col-md-7">
                            <form>
                                <div className="group">
                                    <input type="text" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Name</label>
                                </div>
                                <div className="group">
                                    <input type="text" required />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Email</label>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact