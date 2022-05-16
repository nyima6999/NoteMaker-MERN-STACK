import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "Center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">&copy; Nyima</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
