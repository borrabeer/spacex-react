import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import ReactPlayer from "react-player";

const Launchstyle = styled.div`
  .launchdetail-con {
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

const Launchesdetail = (props) => {
  const [detail, setDetail] = useState({});
  let { flight_number } = useParams();
  const history = useHistory();
  let { path, url } = useRouteMatch();
  useEffect(async () => {
    const detail = await axios.get(
      `https://api.spacexdata.com/v3/launches/${flight_number}`
    );
    setDetail(detail.data);
  }, []);
  return (
    <Launchstyle>
      <div className="launchdetail-con py-5">
        <Container className="px-3">
          <div className="content-l mb-5 ">
            <ReactPlayer
              url={detail.links ? detail.links.video_link : ""}
              width="100%"
              height="50vh"
            />
          </div>
          <div className="content-r my-5">
            <h1
              className="text-uppercase font-weight-bolder"
              style={{ textDecoration: "underline" }}
            >
              {detail.mission_name}
            </h1>
            <h3 className="text-uppercase font-weight-bolder">
              ROCKET:{" "}
              <Link to={`/rockets/${detail.rocket?.rocket_id}`}>
                {detail.rocket?.rocket_name}
              </Link>
            </h3>
            <h5 className="text-uppercase font-weight-bolder my-4">
              LANUCH DATE:{" "}
              {new Date(detail.launch_date_unix * 1000).toLocaleString(
                "en-US",
                { timeZoneName: "short" }
              )}
            </h5>
            <h5 className="text-uppercase font-weight-bolder my-3">
              LAUNCH SUCCESS: {detail.launch_success ? "True" : "False"}
            </h5>
            <p className="my-4" style={{ lineHeight: 2 }}>
              {detail.details}
            </p>
          </div>
        </Container>
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
    </Launchstyle>
  );
};

export default Launchesdetail;
