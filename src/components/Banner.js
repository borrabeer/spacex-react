import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Background from "../img/banner.jpg";

import styled from "styled-components";
const Bannerstyle = styled.div`
  .banner-bg {
    height: 100vh;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }
  .banner-con {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    height: 100vh;
    object-fit: contain;
  }

  .banner-con > h1 {
    font-size: 60px;
  }

  .banner-con > p {
    font-size: 25px;
  }

  .btn {
    width: 80%;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .btn-outline {
    background: transparent;
    color: #fff;
    border: 5px solid #fff;
    transition: all 0.3s ease-out;
  }

  .button-sec {
    display: flex;
  }

  @media screen and (max-width: 960px) {
    .banner-con > h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .banner-con > h1 {
      font-size: 30px;
    }

    .banner-con > p {
      font-size: 20px;
    }

    .button-mb {
      display: block;
      text-decoration: none;
    }
  }
`;

class Banner extends Component {
  render() {
    return (
      <Bannerstyle>
        <div
          className="banner-bg"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <Container>
            <Row>
              <Col md={4}>
                <div className="banner-con text-light">
                  <h1 className="text-uppercase m-3">SpaceX public API</h1>
                  <p className="m-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="button-sec button-mb mt-3 ">
                    <Button
                      className="m-3 p-3 btn btn-outline"
                      size="lg"
                    >
                      ROCKET
                    </Button>
                    <Button
                      className="m-3 p-3 btn btn-outline"
                      size="lg"
                    >
                      LANUCHES
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Bannerstyle>
    );
  }
}

export default Banner;
