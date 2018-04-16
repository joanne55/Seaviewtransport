import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import Map from '../Images/map.png';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            name: "",
            formErrors: { email: "", name: "" },
            emailValid: false,
            nameValid: false,
            formValid: false
        }
    }

    handleUserInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'name':
                nameValid = value.length >= 1;
                fieldValidationErrors.name = nameValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid
        },
            this.validateForm
        );
    }
    
    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.nameValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'is-invalid');
    }

    render() {
        return (
            <section className="footer">
                <div className="footer-map">
                    <div className="contact-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <h1>Get in Touch</h1>
                                    <div className="contact-title-txt">
                                        SeaviewTransport aims to solve your waste management problems efficiently
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img id ="map" src={Map}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="row">
                        <form className="col-md-7 contact-form-main">
                            <div className="contact-form">
                                <h4 className="pb-3">Got a question?</h4>
                                <div className="panel panel-default text-white bg-danger rounded">
                                    <FormErrors formErrors={this.state.formErrors} />
                                </div>
                                <div className={`form-group pt-3 ${this.errorClass(this.state.formErrors.name)}`}>
                                    <label htmlFor="name">Name:</label>
                                    <input className={`form-control ${this.errorClass(this.state.formErrors.name)}`} type="text" value={this.state.name} onChange={(event) => this.handleUserInput(event)} id="name" name="name" required />
                                </div>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                    <label htmlFor="email">Email address:</label>
                                    <input className={`form-control ${this.errorClass(this.state.formErrors.email)}`} type="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">Comment:</label>
                                    <textarea className="form-control" rows="4" id="comment" required />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <button type="submit" className="btn btn-primary contact-submit" disabled={!this.state.formValid}> Submit <span className={this.state.formValid ? "fa fa-check fa-fw" : ""}></span></button>
                            </div>
                        </form>
                        <div className="col-md-5 contact-info">
                            <div className="contact-info-txt">
                                <h3>Contact Us</h3>
                                <p><span className="fa fa-envelope fa-fw"></span><span className="ml-sm-3">SVSHJL@singnet.com.sg</span></p>
                                <p><span className="fa fa-map-marker fa-fw"></span><span className="ml-sm-3">3 Defu Lane 6 Singapore 539366</span></p>
                                <p><span className="fa fa-phone fa-fw"></span><span className="ml-sm-3">62857088 / 62850688</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    Design and Develope by © Ezsofe 2018 Han Jiyao, Joanne
                </div>
            </section>
        )
    }
}

export default Footer