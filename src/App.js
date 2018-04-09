import React, { Component } from 'react';
import './App.css';
import './Components/aboutUs.css'
import './Components/contact.css'
import Carousel from './Carousel';
import Navbar from './Navbar';
import AboutUs from './Components/aboutUs';
import Contact from './Components/contact';
    
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
