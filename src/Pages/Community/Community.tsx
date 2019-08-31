import React from "react";
import logo from "../../img/favicon.png";
import { Nav, Navbar, Form, Button } from "react-bootstrap";

const Community = props => {

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
    <section>

    </section>
    Community page
    </>
  );
};

export default Community;
