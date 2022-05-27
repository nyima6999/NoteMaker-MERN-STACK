import React from "react";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = ({ setSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

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
                onChange={(e) => setSearch(e.target.value)}
              ></FormControl>
            </Form>
          </Nav>
          {userInfo ? (
            <Nav>
              <Nav.Link>
                <Link
                  to="/MyNotes"
                  style={{
                    color: "white",
                  }}
                >
                  My Notes
                </Link>
              </Nav.Link>
              {/* <Nav.Link href="/MyNotes">My Notes</Nav.Link> */}
              <NavDropdown title={`${userInfo?.name}`} id="basic-nav-dropdown">
                {" "}
                <NavDropdown.Item href="profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              {" "}
              <Nav.Link>
                <Link
                  to="/login"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: 18,
                  }}
                >
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
