import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Background from "../img/launch.jpg";
import axios from "axios";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
const Launchstyle = styled.div`
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

  .launchpage-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
  }

  .launch-card {
    padding: 5rem 0;
  }

  .jumbotron {
    margin: 0;
  }

  .launchpage-con > h1 {
    font-size: 7rem;
  }

  .launchpage-con > p {
    font-size: 3rem;
  }

  @media screen and (max-width: 960px) {
    .launchpage-con > h1 {
      font-size: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .launchpage-con > h1 {
      font-size: 4rem;
    }

    .launchpage-con > p {
      font-size: 1.5rem;
    }
  }
`;

const Launchpage = (props) => {
  const [launchs, setLaunchs] = useState([]);
  let { path, url } = useRouteMatch();
  useEffect(async () => {
    const launchs = await axios.get("https://api.spacexdata.com/v3/launches");
    console.log(launchs.data)
    setLaunchs(launchs.data);
  }, []);
  return (
    <Launchstyle>
      <Jumbotron
        fluid
        className="banner-bg"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Container>
          <div className="launchpage-con text-light text-uppercase">
            <h1>LAUNCHES</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid>
        <Card className="p-3 rounded mt-5 mx-3" border="dark">
          <Form>
            <Form.Row>
              <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
                <Form.Label>
                  <h4>Launch year</h4>
                </Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
                <Form.Label>
                  <h4>Rocket name</h4>
                </Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
                <Form.Label>
                  <h4>Launch success</h4>
                </Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </Card>
        <div className="launch-card">
          <Container>
            <Row>
              <div className="m-3 d-flex flex-wrap">
                {launchs.map((launch) => {
                  return (
                    <Col
                      className="w-100 p-3 d-flex flex-column"
                      xs={12}
                      md={6}
                      lg={4}
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden d-flex flex-column h-100" key={launch.flight_number}>
                        <div
                          className="banner-card"
                          style={{
                            backgroundImage: `url(${launch.links.mission_patch ? launch.links.mission_patch_small : Background})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                        <div className="p-4 d-flex flex-column">
                          <h3 className="mb-4">{launch.mission_name}</h3>
                          <div className="mb-4 text-info d-flex">
                            <p>{launch.details}</p>
                          </div>
                          <hr />
                          <Link to={{ pathname: `${url}/${launch.flight_number}` }}>
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
    </Launchstyle>
  );
};

export default Launchpage;
