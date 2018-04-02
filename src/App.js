import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';
import Navbar from './Navbar';

class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
            </div>
        )
    }
}

export default App
