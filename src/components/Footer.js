import React, { Component } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

import styled from "styled-components";
const Footerstyle = styled.div`
  .footer {
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Footerstyle>
        <Container>
          <div className="footer text-center">
            <p className="text-uppercase">
              IT-KMITL ©COPYRIGHT 2021. All Rights Reserved.
            </p>
          </div>
        </Container>
      </Footerstyle>
    );
  }
}

export default Footer;
