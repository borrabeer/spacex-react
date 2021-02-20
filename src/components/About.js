import React, { Component } from "react";
import Container from 'react-bootstrap/Container'

import styled from "styled-components";
const Aboutstyle = styled.div`
  .about-con {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
  }

  .about-con > h1 {
    font-size: 60px;
  }

  .about-con > p {
    font-size: 25px;
  }

  @media screen and (max-width: 960px) {
    .about-con > h1 {
      font-size: 40px;
    }
    .comma {
        font-size 60px;
    }
  }

  @media screen and (max-width: 768px) {
    .about-con > h1 {
      font-size: 30px;
    }

    .about-con > p {
      font-size: 20px;
    }

    .comma {
        font-size 30px;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <Aboutstyle>
        <div style={{ backgroundColor: "#fff" }}>
          <Container>
            <div className="about-con text-dark">
              <h1 className="text-uppercase m-3">DESCRIPTION </h1>
              <p className="m-3">
                SpaceX, in full Space Exploration Technologies Corporation,
                American aerospace company founded in 2002 that helped usher in
                the era of commercial spaceflight. It was the first private
                company to successfully launch and return a spacecraft from
                Earth orbit and the first to launch a crewed spacecraft and dock
                it with the International Space Station (ISS). Headquarters are
                in Hawthorne, California.
              </p>
            </div>
          </Container>
        </div>
      </Aboutstyle>
    );
  }
}

export default About;
