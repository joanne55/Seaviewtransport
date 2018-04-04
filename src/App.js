import React, { Component } from 'react';
import './App.css';
import './aboutUs.css'
import Carousel from './Carousel';
import Navbar from './Navbar';
import AboutUs from './aboutUs';
import Services from './Services';

class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
                <AboutUs />
                <Services />
            </div>
        )
    }
}

export default App
