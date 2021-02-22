import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
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
  const [filterLaunchs, setFilterLaunchs] = useState([]);
  const [filterBySuccess, setFilterBySuccess] = useState("all");
  const [filterByName, setFilterByName] = useState("all");
  const [filterByYear, setFilterByYear] = useState("all");
  let { path, url } = useRouteMatch();
  useEffect(async () => {
    const launchs = await axios.get("https://api.spacexdata.com/v3/launches");
    setLaunchs(launchs.data);
    setFilterLaunchs(launchs.data);
  }, []);
  const filterSuccess = (option) => {
    if (option !== "all") {
      if (filterByName !== "all" || filterByYear !== "all") {
        const filter = launchs.filter(
          (data) =>
            String(data.launch_success) === option &&
            (filterByName !== "all"
              ? data.rocket.rocket_id === filterByName
              : true) &&
            (filterByYear !== "all" ? data.launch_year === filterByYear : true)
        );
        setFilterLaunchs(filter);
      } else {
        const filter = launchs.filter(
          (data) => String(data.launch_success) === option
        );
        setFilterLaunchs(filter);
      }
    } else {
      if (filterByName !== "all" || filterByYear !== "all") {
        const filter = launchs.filter(
          (data) =>
            (filterByName !== "all"
              ? data.rocket.rocket_id === filterByName
              : true) &&
            (filterByYear !== "all" ? data.launch_year === filterByYear : true)
        );
        setFilterLaunchs(filter);
      } else {
        setFilterLaunchs(launchs);
      }
    }
  };
  const filterName = (option) => {
    if (option !== "all") {
      if (filterBySuccess !== "all" || filterByYear !== "all") {
        const filter = launchs.filter(
          (data) =>
            data.rocket.rocket_id === option &&
            (filterBySuccess !== "all"
              ? String(data.launch_success) === filterBySuccess
              : true) &&
            (filterByYear !== "all" ? data.launch_year === filterByYear : true)
        );
        setFilterLaunchs(filter);
      } else {
        const filter = launchs.filter(
          (data) => data.rocket.rocket_id === option
        );
        setFilterLaunchs(filter);
      }
    } else {
      if (filterBySuccess !== "all" || filterByYear !== "all") {
        const filter = launchs.filter(
          (data) =>
            (filterBySuccess !== "all"
              ? String(data.launch_success) === filterBySuccess
              : true) &&
            (filterByYear !== "all" ? data.launch_year === filterByYear : true)
        );
        setFilterLaunchs(filter);
      } else {
        setFilterLaunchs(launchs);
      }
    }
  };
  const filterYear = (option) => {
    if (option !== "all") {
      if (filterBySuccess !== "all" || filterByName !== "all") {
        const filter = launchs.filter(
          (data) =>
            data.launch_year === option &&
            (filterBySuccess !== "all"
              ? String(data.launch_success) === filterBySuccess
              : true) &&
            (filterByName !== "all"
              ? data.rocket.rocket_id === filterByName
              : true)
        );
        setFilterLaunchs(filter);
      } else {
        const filter = launchs.filter((data) => data.launch_year === option);
        setFilterLaunchs(filter);
      }
    } else {
      if (filterBySuccess !== "all" || filterByName !== "all") {
        const filter = launchs.filter(
          (data) =>
            (filterBySuccess !== "all"
              ? String(data.launch_success) === filterBySuccess
              : true) &&
            (filterByName !== "all"
              ? data.rocket.rocket_id === filterByName
              : true)
        );
        setFilterLaunchs(filter);
      } else {
        setFilterLaunchs(launchs);
      }
    }
  };
  return (
    <Launchstyle>
      <Jumbotron
        fluid
        className="banner-bg"
        style={{
          backgroundImage: `url("/images/launch.jpg")`,
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
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  onChange={(e) => {
                    setFilterByYear(e.target.value);
                    filterYear(e.target.value);
                  }}
                >
                  <option value="all">Choose...</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
                <Form.Label>
                  <h4>Rocket name</h4>
                </Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  onChange={(e) => {
                    setFilterByName(e.target.value);
                    filterName(e.target.value);
                  }}
                >
                  <option value="all">Choose...</option>
                  <option value="falcon1">Falcon 1</option>
                  <option value="falcon9">Falcon 9</option>
                  <option value="falconheavy">Falcon Heavy</option>
                  <option value="starship">Starship</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
                <Form.Label>
                  <h4>Launch success</h4>
                </Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={"all"}
                  onChange={(e) => {
                    setFilterBySuccess(e.target.value);
                    filterSuccess(e.target.value);
                  }}
                >
                  <option value="all">Choose...</option>
                  <option value={false}>False</option>
                  <option value={true}>True</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </Card>
        <div className="launch-card">
          <Container>
            <Row>
              <div className="text-center d-flex flex-wrap">
                {filterLaunchs.map((launch) => {
                  return (
                    <Card className="m-3" style={{ width: "18rem" }}>
                      <Card.Img
                        className="banner-card"
                        variant="top"
                        style={{
                          backgroundImage: `url(${
                            launch.links.mission_patch
                              ? launch.links.mission_patch_small
                              : "/images/launch.jpg"
                          })`,
                          backgroundSize: "cover",
                        }}
                      />
                      <Card.Body>
                        <Card.Title>{launch.mission_name}</Card.Title>
                        <Card.Text>
                          <div
                            className="mb-4 text-info"
                            style={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap"
                            }}
                          >
                            <p>{launch.details}</p>
                          </div>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Link
                          to={{ pathname: `${url}/${launch.flight_number}` }}
                        >
                          <Button variant="outline-info">Read more..</Button>
                        </Link>
                      </Card.Footer>
                    </Card>
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
