import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Background from "../img/rocket.png";
import axios from "axios";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
const Rocketstyle = styled.div`
  .banner-bg {
    height: 80vh;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }

  .banner-card {
    height: 30vh;
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
    padding: 5rem 0;
  }

  .jumbotron {
    margin: 0;
  }

  .rocketpage-con > h1 {
    font-size: 7rem;
  }

  .rocketpage-con > p {
    font-size: 3rem;
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

const Rocketpage = (props) => {
  const [rockets, setRockets] = useState([]);
  let { path, url } = useRouteMatch();
  useEffect(async () => {
    const rockets = await axios.get("https://api.spacexdata.com/v3/rockets");
    setRockets(rockets.data);
  }, []);
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

      <Container fluid>
        <div className="rocket-card">
          <Container>
            <Row>
              <div className="m-3 d-flex flex-wrap">
                {rockets.map((rocket) => {
                  return (
                    <Col
                      className="w-100 p-3 d-flex flex-column"
                      xs={12}
                      md={6}
                      lg={4}
                      key={rocket.id}
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden d-flex flex-column h-100">
                        <div
                          className="banner-card"
                          style={{
                            backgroundImage: `url(${rocket.flickr_images[0]})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div className="p-4 d-flex flex-column">
                          <h3 className="mb-4">{rocket.rocket_name}</h3>
                          <div className="mb-4 text-info d-flex">
                            <p>{rocket.description}</p>
                          </div>
                          <hr />
                          <Link to={{ pathname: `${url}/${rocket.rocket_id}` }}>
                            <Button variant="outline-info">Read more..</Button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </div>
            </Row>
          </Container>
        </div>
        ;
      </Container>
    </Rocketstyle>
  );
};

export default Rocketpage;
