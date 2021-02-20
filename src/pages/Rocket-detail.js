import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Background from "../img/rocket.png";

import styled from "styled-components";
const Rocketstyle = styled.div`
  .container-cus {
    max-width: 1140px;
    margin: 0 auto;
  }

  .banner-bg {
    height: 80vh;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }

  .rocketdetail-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

  .rocket-card {
    background: #f0f0f0;
    padding: 5rem 0;
  }

  .jumbotron {
    margin: 0;
  }

  .rocketdetail-con > h1 {
    font-size: 7rem;
  }

  .rocketdetail-con > p {
    font-size: 3rem;
  }

  .content-l img {
    width: 100%;
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
    .rocketdetail-con > h1 {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .rocketdetail-con > h1 {
      font-size: 4rem;
    }

    .rocketdetail-con > p {
      font-size: 1.5rem;
    }
  }
`;

class Rocketdetail extends Component {
  render() {
    return (
      <Rocketstyle>
        <div className="rocketdetail-con">
          <div className="container-cus">
            <Container>
              <Row>
                <Col xs={12} md={6} className="content-l my-3">
                  <img src={Background} />
                </Col>
                <Col xs={12} md={6} className="content-r my-3">
                  <h1 className="text-uppercase font-weight-bolder">NAME</h1>
                  <h3 className="text-uppercase">NAME</h3>
                  <h5 className="text-uppercase font-weight-light">NAME</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Col>
              </Row>
              <Button className="p-3 btn btn-outline" size="lg">
                BACK
              </Button>
            </Container>
          </div>
        </div>
      </Rocketstyle>
    );
  }
}

export default Rocketdetail;
