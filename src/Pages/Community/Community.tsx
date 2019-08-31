import React from "react";
import "./Community.css";
import SearchHeader from "../../Components/SearchHeader";
import FilterBox from "../../Components/FilterBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Dropdown } from "react-bootstrap";
import ProfileCard from "../../Components/ProfileCard";
import axios from 'axios';

import users from "../../data/users.json";

class Community extends React.Component {

  // state = {
  //   users: []
  // }

  // constructor(){
  //   super();
  // }

  // componentDidMount() {
  //   // axios.get(`users`)
  //   //   .then(res => {
  //   //     const users = res.data;
  //   //     this.setState({ users });
  //   //   })
  //   // this.setState({ users });
  // }

  render() {

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
            {/* <p className="text-muted text-left">Sort by <FontAwesomeIcon icon="chevron-down"/></p> */}
            <Dropdown className="text-left">
              <Dropdown.Toggle id="sort-by" size="sm" className="text-muted text-left">
                Sort by <FontAwesomeIcon icon="chevron-down"/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Name</Dropdown.Item>
                <Dropdown.Item href="#">State</Dropdown.Item>
                <Dropdown.Item href="#">Job role</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </header>
          <Row>
            { 
              users && users.map((user, i)=> { 
                return (<ProfileCard user={user} key={i} />)
              }) 
            }
          </Row>
        </section>
      </Container>
      </>
    )
  }
};

export default Community;
