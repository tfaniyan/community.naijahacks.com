import * as React from "react";
import logo from "../../img/favicon.png";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <img src={logo} style={{ height: "40px" }} alt="NaijaHack-logo" />
        </Navbar.Brand>
        <Nav.Link href="/" className="name-brand brand-name brand-name-nav">
          NaijaHacks
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end nav navbar-nav navbar-right">
          <Nav.Link
            href="/community"
            target="_blanks"
            rel="noopener noreferrer"
          >
            Portal
          </Nav.Link>
          <Nav.Link
            href="https://naijahacks.com"
            target="_blanks"
            rel="noopener noreferrer"
          >
            About
          </Nav.Link>
          <Nav.Link
            href="https://naijahacks.com"
            target="_blanks"
            rel="noopener noreferrer"
          >
            Team
          </Nav.Link>
          <Nav.Link
            href="https://naijahacks.com"
            target="_blanks"
            rel="noopener noreferrer"
          >
            Sponsors
          </Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Navbar.Collapse>
        <Form inline>
          <Nav.Link />
          <Button
            type="submit "
            className="btn btn-default get-started-btn"
            href="/signup"
          >
            Get Started
          </Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;
