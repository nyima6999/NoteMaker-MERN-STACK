import React from "react";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNotes from "../../screens/MyNotes/MyNotes";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">NoteMaker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              ></FormControl>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="/MyNotes">My Notes</Nav.Link>
            <NavDropdown title="Nyima" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
