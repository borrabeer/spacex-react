import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
                <h5>ROCKETS</h5>
              </NavLink>
              <NavLink
                exact
                className="mx-3 text-dark inactive px-3 py-2"
                activeClassName="active"
                to="/launches"
              >
                <h5>LAUNCHES</h5>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Navbarstyle>
  );
};

export default Navs;
