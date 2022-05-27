import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./LandingPage.css";
const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      navigate("/MyNotes");
    }
  });
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">
              Welcome To Note <br></br>Maker
            </h1>
            <p className="subtitle">One safe place for your notes</p>
            <div className="btn-container">
              {" "}
              <a href="/login">
                {" "}
                <Button size="lg" className="landing-btn">
                  Login
                </Button>{" "}
              </a>
              <a href="/register">
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
