import React, { useEffect, useState } from "react";
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

  .rocketpage-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
  }

  .rocket-card {
    background: #f0f0f0;
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

      <Container>
        {rockets.map((rocket) => {
          return (
            <div className="rocket-card" key={rocket.id}>
              <div className="card text-center">
                <div className="overflow">
                  <img className="card-img-top" src={rocket.flickr_images[0]} />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">{rocket.rocket_name}</h4>
                  <p className="card-text text-secondary">
                    {rocket.description}
                  </p>
                  <Link to={{ pathname: `${url}/${rocket.rocket_id}` }}>
                    {" "}
                    <Button variant="outline-info">Read more..</Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </Rocketstyle>
  );
};

export default Rocketpage;
