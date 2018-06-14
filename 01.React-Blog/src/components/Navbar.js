import React, { Component } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';

import './styles/Navbar.css';

// CONTENT-COMPONENT
import Profile from './contents/Profile';

class Navbars extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey={1} id="tab-wrap">
                    <Tab animation eventKey={1} title="Profile">
                        <Profile />
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
            </div>
        );
    }
}

export default Navbars;
