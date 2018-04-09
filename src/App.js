import React, { Component } from 'react';
import './Components/App.css';
import './Components/aboutUs.css'
import './Components/contact.css'
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import AboutUs from './Components/aboutUs';
import Services from './Components/Services';
import Footer from './Components/Footer';

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
