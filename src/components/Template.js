import React, {useContext} from "react";
import { Container, Navbar, Row,  Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logoSrc from "./logo.png";
import "./Template.css";
import Context from "../context";

export default function Template({ children }) {
  const {isLogin} = useContext(Context)
  return (
    <Container>
      <header className="header">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand as={Link} to="/">
            <img
              alt=".dt_soft"
              src={logoSrc}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/todo" exact>
                To-do
              </Nav.Link>
              {
                isLogin && <Nav.Link as={NavLink} to="/albums">
                  Albums
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <Row>
          {children}
        </Row>
      </main>
    </Container>
  );
}