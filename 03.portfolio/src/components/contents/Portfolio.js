import React, { Component } from 'react';
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

class Portfolio extends Component {
  /*    filterSelection("all")
    const filterSelection = (c) => {
        var x, i;
        x = document.getElementByClassName("Col");
        if (c === "all") c = "";

        for(i = 0; i < x.length; i++) {

        }
    }
    */
  constructor(props) {
    super(props);
    this.filterSelection = this.filterSelection.bind(this);
  }

  filterSelection(c) {
    //console.log("button was clicked");
    var i, x;
    x = document.getElementsByClassName("column");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <div className="content-inner text-center">
              <h4>Portfolio-Component</h4>
              <ButtonToolbar>
                <Button
                  className="btn active"
                  onClick={this.filterSelection}
                  bsStyle="link">
                  All
                </Button>
                <Button
                  className="btn"
                  onClick={this.filterSelection}
                  bsStyle="link">
                  Web
                </Button>
              </ButtonToolbar>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="web column">
            <div className="content">
              <img
                src="portfolio-1.jpg"
                alt="potfolio-1.jpg"
                style={{ width: ' 100%' }}
              />
              <h4>Portfolio</h4>
              <p>Lorem ipsum dolo</p>
            </div>
          </Col>
          <Col md={12} className="web column">
            <div className="content">
              <img
                src="portfolio-1.jpg"
                alt="potfolio-1.jpg"
                style={{ width: ' 100%' }}
              />
              <h4>Portfolio</h4>
              <p>Lorem ipsum dolo</p>
            </div>
          </Col>
          <Col md={12} className="web column">
            <div className="content">
              <img
                src="portfolio-1.jpg"
                alt="potfolio-1.jpg"
                style={{ width: ' 100%' }}
              />
              <h4>Portfolio</h4>
              <p>Lorem ipsum dolo</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");

export default Portfolio;
