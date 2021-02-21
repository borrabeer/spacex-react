import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class Navs extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        className="py-3"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/" className="title-nav text-dark">
            <h2>SpaceX.</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="mx-3 text-dark" href="/">
                <h5>HOME</h5>
              </Nav.Link>
              <Nav.Link className="mx-3 text-dark" href="/rockets">
                <h5>ROCKET</h5>
              </Nav.Link>
              <Nav.Link className="mx-3 text-dark" href="/launches">
                <h5>LAUNCH</h5>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navs;
