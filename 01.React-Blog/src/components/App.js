import React, { Component } from 'react';

import './styles/App.css';
// COMPONENT
import Navbar from './Navbar';

// TYPE OF COMPONENT: Class-Component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className= "app-main">
                <Navbar />
            </div>
        );
    }
}

export default App;
