import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
class Skills extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <div className="content-inner text-center">
                        <h4>SKILLS-COMPONENT</h4>
                        <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                        </p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Skills;
