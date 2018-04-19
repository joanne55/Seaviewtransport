import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import Map from '../Images/map.png';

const Email = window.Email;

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            formErrors: { email: "", name: "" },
            emailValid: false,
            nameValid: false,
            formValid: false,
        };
        this.sendEmail = this.sendEmail.bind(this);
        this.hashed_ticket_num = this.hashed_ticket_num.bind(this);

    }

    handleUserInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value); });
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

    hashed_ticket_num() {
        this.str = this.state.email + Math.random().toString();
        this.len = this.str.length;
        this.hash = 0;
        for (this.i = 1; this.i <= this.len; this.i++) {
            this.char = this.str.charCodeAt((this.i - 1));
            this.hash += this.char * Math.pow(31, (this.len - this.i));
            this.hash = this.hash & this.hash; //javascript limitation to force to 32 bits
        }
        return this.hash;
    }

    sendEmail() {
        Email.send(
            this.state.email,
            "jnjw55@gmail.com",
            this.hashed_ticket_num(),                                //Error in syntax, unable to call function and return its value
            document.getElementById("comment").value,        
            "smtp.mailgun.org",
            "postmaster@sandboxc589e5cbd93f4aaba4406ad7bd4d9fac.mailgun.org",
            "f477f4032a856807786bbf4c20296f09-80bfc9ce-79c3f885",
            { token: "121f7987-95ff-435c-ad95-943ca513f8cb" }   //SMTP credentials - security token
        );
        alert("sent");
    }

    render() {
        return (
            <section className="footer" id="contact">
                <div className="footer-map">
                    <div className="contact-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <h1 className="contact-main-title">
                                        Get in Touch
                                    </h1>
                                    <div className="contact-title-txt">
                                        SeaviewTransport aims to solve your waste management problems efficiently
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img id ="map" src={Map} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="row">
                        <form className="col-md-7 contact-form-main" onSubmit={this.sendEmail}>
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