import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from 'react-bootstrap/Button'
import Background from "../img/rocket.png";

import styled from "styled-components";
const Rocketstyle = styled.div`
  .banner-bg {
    height: 80vh;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }

  .rocketpage-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
  }

  .rocket-card {
      background: #f0f0f0;
    padding: 5rem 0;
  }

  .jumbotron {
      margin: 0
  }

  .rocketpage-con > h1 {
    font-size: 7rem;
  }

  .rocketpage-con > p {
    font-size: 3rem;
  }

  .card {
    width: 20rem;
  }

  .card:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.254) !important;
  }

  .card-body {
    padding: 3rem 0 !important;
  }

  .card-text {
    font-size: 0.9rem;
    padding: 0.4rem 1.9rem;
  }

  .overflow {
    overflow: hidden;
  }

  .card-img-top {
    transform: scale(1);
    transition: transform 0.5s ease;
  }

  .card-img-top:hover {
    transform: scale(1.8);
  }

  @media screen and (max-width: 960px) {
    .rocketpage-con > h1 {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .rocketpage-con > h1 {
      font-size: 4rem;
    }

    .rocketpage-con > p {
      font-size: 1.5rem;
    }
  }
`;

class Rocketpage extends Component {
  render() {
    return (
      <Rocketstyle>
        <Jumbotron
          fluid
          className="banner-bg"
          style={{
            backgroundImage: `url(${Background})`,
          }}
        >
          <Container>
            <div className="rocketpage-con text-light">
              <h1>ROCKETS</h1>
            </div>
          </Container>
        </Jumbotron>
        <div className="rocket-card">
          <Container>
            <div className="card text-center">
              <div className="overflow">
                <img className="card-img-top" src={Background} />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">lorem</h4>
                <p className="card-text text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Button variant="outline-info">Read more..</Button>
              </div>
            </div>
          </Container>
        </div>
      </Rocketstyle>
    );
  }
}

export default Rocketpage;
