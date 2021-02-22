import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
const Rocketstyle = styled.div`
  .rocketdetail-con {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    background: #f0f0f0;
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

const Rocketdetail = (props) => {
  const [detail, setDetail] = useState({});
  let { rocket_id } = useParams();
  const history = useHistory();
  useEffect(async () => {
    const detail = await axios.get(
      `https://api.spacexdata.com/v3/rockets/${rocket_id}`
    );
    setDetail(detail.data);
  }, []);
  return (
    <Rocketstyle>
      <div className="rocketdetail-con px-3">
        <div className="container-cus py-3">
          <Row>
            <Col xs={12} md={6} className="content-l mb-5">
              <img
              className="shadow-lg rounded"
                src={
                  detail.flickr_images ? detail.flickr_images[0] : "/images/rocket.png"
                }
              />
            </Col>
            <Col xs={12} md={6} className="content-r px-5">
              <h1 className="text-uppercase font-weight-bolder" style={{textDecoration: "underline"}}>
                {detail.rocket_name}
              </h1>
              <h5 className="text-uppercase font-weight-bolder my-3">COMPANY: {detail.company}</h5>
              <h5 className="text-uppercase font-weight-bolder my-3">
                COUNTRY: {detail.country}
              </h5>
              <p className="my-4" style={{lineHeight: 2}}>{detail.description}</p>
            </Col>
          </Row>
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
    </Rocketstyle>
  );
};

export default Rocketdetail;
