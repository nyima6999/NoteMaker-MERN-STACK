import React, { Children, useEffect } from "react";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./LoginPage.css";
import axios from "axios";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      navigate("/MyNotes");
    }
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <MainScreen title="Welcome, Login Here">
      <div className="loginContainer">
        {error && <Error variant="danger">{Children}</Error>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label> Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            New User? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginPage;
