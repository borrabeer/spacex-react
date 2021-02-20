import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Background from "../img/lanuch-banner.jpg";

import styled from "styled-components";
const Lanuchstyle = styled.div`
  .Lanuch-bg {
    height: 100vh;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }
  .Lanuch-con {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    object-fit: contain;
  }

  .Lanuch-con > h1 {
    font-size: 60px;
  }

  .Lanuch-con > p {
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
    .Lanuch-con > h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .Lanuch-con > h1 {
      font-size: 30px;
    }

    .Lanuch-con > p {
      font-size: 20px;
    }

    .button-mb {
      display: block;
      text-decoration: none;
    }
  }
`;

class Lanuch extends Component {
  render() {
    return (
      <Lanuchstyle>
        <div
          className="Lanuch-bg"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <Container>
            <div className="Lanuch-con text-light">
              <h1 className="text-uppercase">Lanuches</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="button-sec button-mb mt-3 ">
                <Button className="p-3 btn btn-outline" size="lg">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </Lanuchstyle>
    );
  }
}

export default Lanuch;
