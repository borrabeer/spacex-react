import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styled from "styled-components";
const Elonstyle = styled.div`
  .elon-con {
    display: flex;
    justify-content: center;
    padding: 5rem 0;
  }

  .content-r > h1 {
    font-size: 50px;
  }

  .content-r > p {
    font-size: 20px;
  }

  .content-l img {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    .content-r > h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .content-r > h1 {
      font-size: 30px;
    }

    .content-r > p {
      font-size: 20px;
    }
  }
`;

class ElonBanner extends Component {
  render() {
    return (
      <Elonstyle>
        <div className="elon-con text-dark">
          <Container>
            <Row>
              <Col xs={12} md={6} className="content-l my-3">
                <img src={"/images/elon.jpg"} />
              </Col>
              <Col xs={12} md={6} className="content-r my-3">
                <h1 className="text-uppercase">DESCRIPTION </h1>
                <p>
                  SpaceX, in full Space Exploration Technologies Corporation,
                  American aerospace company founded in 2002 that helped usher
                  in the era of commercial spaceflight. It was the first private
                  company to successfully launch and return a spacecraft from
                  Earth orbit and the first to launch a crewed spacecraft and
                  dock it with the International Space Station (ISS).
                  Headquarters are in Hawthorne, California.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Elonstyle>
    );
  }
}

export default ElonBanner;
