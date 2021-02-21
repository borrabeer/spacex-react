import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { Route, NavLink, Switch } from "react-router-dom";

// PAGES
import Home from "../pages/Home";
import Rocketpage from "../pages/Rocket-page";
import Rocketdetail from "../pages/Rocket-detail";
import Launchespage from "../pages/Launches-page";
import Launchesdetail from "../pages/Launches-detail";

const Navbarstyle = styled.div`
  .inactive {
    text-decoration: none;
    font-weight: bolder;
  }

  .inactive:hover {
    background: #444;
    text-decoration: none;
    font-weight: bolder;
  }

  .active {
    background: beige;
    color: orange;
    text-decoration: none;
  }
`;
const Navs = () => {
  return (
    <Navbarstyle>
      <Navbar expand="lg" className="py-3" variant="light">
        <Container>
          <Navbar.Brand to="/" className="title-nav text-dark">
            <h2>SpaceX.</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink
                exact
                className="mx-3 text-dark inactive px-3 py-2"
                activeClassName="active"
                to="/"
              >
                <h5>HOME</h5>
              </NavLink>
              <NavLink
                exact
                className="mx-3 text-dark inactive px-3 py-2"
                activeClassName="active"
                to="/rockets"
              >
                <h5>ROCKET</h5>
              </NavLink>
              <NavLink
                exact
                className="mx-3 text-dark inactive px-3 py-2"
                activeClassName="active"
                to="/launches"
              >
                <h5>LAUNCH</h5>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/rockets" component={Rocketpage} />
        <Route path="/rockets/:rocket_id" component={Rocketdetail} />
        <Route path="/launches" component={Launchespage} />
        <Route path="/launches/:flight_number" component={Launchesdetail} />
      </Switch>
    </Navbarstyle>
  );
};

export default Navs;
