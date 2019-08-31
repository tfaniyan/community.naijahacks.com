import React from "react";
import "./Community.css";
import { Form, Col } from "react-bootstrap";

import SearchHeader from "../../Components/SearchHeader";
import FilterBox from "../../Components/FilterBox";

const Community = props => {

  return (
    <>
    <header className="portal-header d-flex flex-column justify-content-between">
      <SearchHeader />
      <h2 className="text-white mb-5">"Find talents on our portal"</h2>
    </header>
    
    <main className="container py-5">
      <FilterBox />      
    </main>
    </>
  );
};

export default Community;
