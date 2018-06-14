import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import './styles/Navbar.css';
class Navbars extends Component {
    render() {
        return (
            <Tabs defaultActiveKey={2} id="tab-wrap">
                <Tab eventKey={1} title="Profile">
                    Profile
                </Tab>
                <Tab eventKey={2} title="Education">
                    Education
                </Tab>
                <Tab eventKey={3} title="Experience">
                    Experience
                </Tab>
                <Tab eventKey={4} title="Skilss">
                    Skills
                </Tab>
            </Tabs>
        );
    }
}

export default Navbars;
