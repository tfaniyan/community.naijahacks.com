import * as React from "react";
import { Col, Card, Button } from "react-bootstrap";
import avatar from "../../img/portal/female-glass.png";
import './ProfileCard.css';

// import your fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCard = () => {
  
  return (
    <>
      <Col xs={12} sm={12} md={4}>
        <Card style={{ border: 0 }} className="shadow-sm">
          <Card.Header className="profile-header">
            <Card.Img variant="top" src={avatar} className="profile-img" />
          </Card.Header>              
          <Card.Body>
            <Card.Title className="font-weight-bold text-muted mt-3 user-name">Ahmed Olanrewaju Olayinka</Card.Title>
            <Card.Text className="user-role"><FontAwesomeIcon icon="user-tag" className="mr-1 text-muted" />(Fullstack Developer)</Card.Text>
            <Card.Text className="user-phone"><FontAwesomeIcon icon="mobile-alt" className="mr-1 text-muted" />08093570289</Card.Text>
            <Card.Text className="user-city"><FontAwesomeIcon icon="map-marker-alt" className="mr-1 text-muted" />Lagos, Nigeria</Card.Text>
            <Card.Text className="user-rating rate-cont">
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon active" />
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon active" />
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon active" />
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon active" />
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon" />
            </Card.Text>            
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center align-items-center b-0" style={{ background: 'transparent', height: 0, border: 0 }}>
            <Button className="fab-btn text-white mr-1 d-flex justify-content-center" title="View Profile">
                <FontAwesomeIcon icon="eye" className="mr-1" color="#fff" /></Button>
            <Button className="fab-btn text-white ml-1 d-flex justify-content-center" title="Share Profile">
              <FontAwesomeIcon icon="share-alt" className="mr-1" color="#fff" /></Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default ProfileCard;
