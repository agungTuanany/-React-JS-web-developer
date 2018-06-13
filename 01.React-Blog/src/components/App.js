import React, { Component } from 'react';

import './css/index.css';

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
            <div>
                <Navbar />
            </div>
        );
    }
}

export default App;
