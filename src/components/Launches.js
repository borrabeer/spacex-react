import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Background from "../img/launch-banner.jpg";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Launchstyle = styled.div`
  .Launch-bg {
    height: 100vh;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }
  .Launch-con {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    object-fit: contain;
  }

  .Launch-con > h1 {
    font-size: 60px;
  }

  .Launch-con > p {
    font-size: 25px;
  }

  .btn {
    width: 100%;
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
    .Launch-con > h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .Launch-con > h1 {
      font-size: 30px;
    }

    .Launch-con > p {
      font-size: 20px;
    }

    .button-mb {
      display: block;
      text-decoration: none;
    }
  }
`;

class Launch extends Component {
  render() {
    return (
      <Launchstyle>
        <div
          className="Launch-bg"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <Container>
            <div className="Launch-con text-light">
              <h1 className="text-uppercase">Launches</h1>
              <div className="button-sec button-mb mt-3 ">
                <Link to="/launches">
                  <Button className="p-3 btn btn-outline" size="lg">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </Launchstyle>
    );
  }
}

export default Launch;
