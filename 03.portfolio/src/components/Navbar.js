import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import './styles/Navbar.css';

// CONTENT-COMPONENT
import Profile from './contents/Profile';
import Education from './contents/Education';
import Portfolio from './contents/Portfolio';
import Experience from './contents/Experience';
import Skills from './contents/Skills';

class Navbars extends Component {
    render() {
        return (
            <Tabs defaultActiveKey={1} id="tab-wrap">
                <Tab animation eventKey={1} title="Profile">
                    <Profile />
                </Tab>
                <Tab eventKey={2} title="Education">
                    <Education />
                </Tab>
                <Tab eventKey={3} title="Portfolio">
                    <Portfolio />
                </Tab>
                <Tab eventKey={4} title="Experience">
                    <Experience />
                </Tab>
                <Tab eventKey={5} title="Skilss">
                    <Skills />
                </Tab>
            </Tabs>
        );
    }
}

export default Navbars;
