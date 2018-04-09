import React, { Component } from 'react';
import './App.css';
import './aboutUs.css'
import Carousel from './Carousel';
import Navbar from './Navbar';
import AboutUs from './aboutUs';
import Services from './Services';
import Footer from './Footer';

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
                <Footer />
            </div>
        )
    }
}

export default App
