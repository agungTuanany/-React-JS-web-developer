import React, { Component } from 'react';
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : "Initial data...."
    }
    this.filterSelection = this.filterSelection.bind(this);
  };

  filterSelection() {
    this.setState({data: "data updated.."})
  }

  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <Row>
          <Col md={12}>
            <Button
              className="btn-active"
              onClick={this.filterSelection}
            >
              All
            </Button>
          </Col>
        </Row>
            <h4>{this.state.data}</h4>
      </div>
    )
  }
}

export default Portfolio;
