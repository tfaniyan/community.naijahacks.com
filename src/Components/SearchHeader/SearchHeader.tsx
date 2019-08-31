import * as React from "react";
import logo from "../../img/favicon.png";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import './SearchHeader.css';

// import your fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchHeader = () => {
  return (
    <>
      <Navbar className="portal-nav justify-content-between">
        <div className="d-flex flex-row justify-content-center">
        <Navbar.Brand href="/">
          <img src={logo} style={{ height: "40px" }} alt="NaijaHack-logo" />
        </Navbar.Brand>
        <Nav.Link href="/" className="name-brand brand-name brand-name-nav">
          NaijaHacks
        </Nav.Link> 
        </div>       
        <Form inline>
          <Button
            type="submit "
            className="search-btn"
            href="/signup"
            style={{background: 'none', border: 0, outline: '0 none' }}
          >
            <FontAwesomeIcon icon="search" color="#fff" size="lg" />
          </Button>
        </Form>
      </Navbar>
    </>
  );
};

export default SearchHeader;
