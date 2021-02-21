import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Background from "../img/rocket.png";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
const Lanuchstyle = styled.div`
  .launchdetail-con {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    height: 100vh;
  }

  .container-cus {
    max-width: 1500px;
    margin: 0 auto;
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

  .btn {
    width: 80%;
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .btn-outline {
    background: transparent;
    color: #000;
    border: 5px solid #000;
    transition: all 0.3s ease-out;
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

const Lanuchesdetail = (props) => {
  const [detail, setDetail] = useState({});
  let { lanuch_id } = useParams();
  const history = useHistory();
  useEffect(async () => {
    const detail = await axios.get(
      `https://api.spacexdata.com/v3/lanuchs/${lanuch_id}`
    );
    setDetail(detail.data);
  }, []);
  return (
    <Lanuchstyle>
      <div className="launchdetail-con">
        <div className="container-cus">
          <Container>
            <Row>
              <Col xs={12} md={6} className="content-l my-3">
                <img
                  src={
                    detail.flickr_images ? detail.flickr_images[0] : Background
                  }
                />
              </Col>
              <Col xs={12} md={6} className="content-r my-3">
                <h1 className="text-uppercase font-weight-bolder">1</h1>
                <h3 className="text-uppercase">1</h3>
                <h5 className="text-uppercase font-weight-light">1</h5>
                <p>1</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="text-center">
        <Button
          className="p-3 btn btn-outline my-5"
          size="lg"
          onClick={() => history.goBack()}
        >
          BACK
        </Button>
      </div>
    </Lanuchstyle>
  );
};

export default Lanuchesdetail;
