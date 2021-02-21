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

  .lanuchdetail-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

  .lanuchdetail-con > h1 {
    font-size: 7rem;
  }

  .lanuchdetail-con > p {
    font-size: 3rem;
  }

  .content-l img {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    .lanuchdetail-con > h1 {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .lanuchdetail-con > h1 {
      font-size: 4rem;
    }

    .lanuchdetail-con > p {
      font-size: 1.5rem;
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
      <div className="lanuchdetail-con">
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
                <h1 className="text-uppercase font-weight-bolder">
                  1
                </h1>
                <h3 className="text-uppercase">1</h3>
                <h5 className="text-uppercase font-weight-light">
                 1
                </h5>
                <p>1</p>
              </Col>
            </Row>
            <Button
              className="p-3 btn btn-outline"
              size="lg"
              onClick={() => history.goBack()}
            >
              BACK
            </Button>
          </Container>
        </div>
      </div>
    </Lanuchstyle>
  );
};

export default Lanuchesdetail;