import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome To Note Maker</h1>
            <p className="subtitle">One safe place for your notes</p>
            <div className="btn-container">
              {" "}
              <a href="/login">
                {" "}
                <Button size="lg" className="landing-btn">
                  Login
                </Button>{" "}
              </a>
              <a href="/Register">
                {" "}
                <Button
                  size="lg"
                  className="landing-btn"
                  variant="outline-primary"
                >
                  Register
                </Button>{" "}
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
