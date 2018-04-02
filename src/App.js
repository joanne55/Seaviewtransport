import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';
import Navbar from './Navbar';
import AboutUs from './aboutUs';

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
            </div>
        )
    }
}

export default App
