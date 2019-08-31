import React from "react";
import "./Community.css";
import SearchHeader from "../../Components/SearchHeader";
import FilterBox from "../../Components/FilterBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row } from "react-bootstrap";

import ProfileCard from "../../Components/ProfileCard";

const Community = props => {

  //get users
  

  return (
    <>
    <header className="portal-header d-flex flex-column justify-content-between">
      <SearchHeader />
      <h2 className="text-white mb-5">"Find talents on our portal"</h2>
    </header>
    
    <Container className="container py-5">
      <FilterBox />      
      <section className="" style={{ position: 'relative', top: '-40px' }}>
        <header className="sortby-cont mb-3">
          <p className="text-muted text-left">Sort by <FontAwesomeIcon icon="chevron-down"/></p>
        </header>
        <Row>
          <ProfileCard />
        </Row>
      </section>
    </Container>
    </>
  );
};

export default Community;
