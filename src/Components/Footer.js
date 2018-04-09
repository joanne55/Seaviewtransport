import React, { Component } from 'react';
import FormErrors from './FormErrors';
import './App.css';

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
        this.setState({[name]: value}, () => { this.validateField(name, value) });
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
            this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.nameValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <div className="row container-fluid">
                <div id="test" className="col-sm-4">
                    <h2>Contact Us</h2>
                    <p><span className="fa fa-envelope fa-fw"></span><span className="ml-sm-3">SVSHJL@singnet.com.sg</span></p>
                    <p><span className="fa fa-map-marker fa-fw"></span><span className="ml-sm-3">3 Defu Lane 6 Singapore 539366</span></p>
                    <p><span className="fa fa-phone fa-fw"></span><span className="ml-sm-3">62857088 / 62850688</span></p>
                </div>

                <form className="col-sm-8" id="test2">
                    <div>
                        <div className="panel panel-default">
                            <div formErrors={this.state.formErrors} />
                        </div>
                        <h2>Got a question?</h2>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                            <label htmlFor="name">Name:</label>
                            <input className="form-control" type="text" value={this.state.name} onChange={(event) => this.handleUserInput(event)} id="name" name="name" required />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                            <label htmlFor="email">Email address:</label>
                            <input className="form-control" type="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Comment:</label>
                            <textarea className="form-control" rows="4" id="comment" required />
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                        <button type="submit" className="btn btn-default" disabled={!this.state.formValid}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Footer