import React from "react";
import logo from "../../img/favicon.png";
import "./Community.css";
import { Nav, Navbar, Form, Button } from "react-bootstrap";

// import your fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Community = props => {

  return (
    <>
    <header>
      <Navbar className="portal-bg">
        <Navbar.Brand href="/">
          <img src={logo} style={{ height: "40px" }} alt="NaijaHack-logo" />
        </Navbar.Brand>
        <Nav.Link href="/" className="name-brand brand-name brand-name-nav">
          NaijaHacks
        </Nav.Link>
        <Navbar.Toggle />
        
        <Form inline>
          {/* <Nav.Link />
          <FontAwesomeIcon icon="search" className="text-white btn search-btn" />
          </Nav.Link> */}
          <Button
            type="submit "
            className="search-btn"
            href="/signup"
            style={{background: 'none', border: 0, outline: '0 none' }}
          >
            <FontAwesomeIcon icon="search" />
          </Button>
        </Form>
      </Navbar>
    </header>
    
    <section>

    </section>
    Community page
    </>
  );
};

export default Community;
