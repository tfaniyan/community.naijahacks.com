import * as React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../img/portal/female-glass.png";
import './ProfileCard.css';

// import your fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCard = (props) => {

  const { user } = props;
  
  return (
    <>
      <Col xs={12} sm={12} md={4} className="mb-5">
        <Card style={{ border: 0 }} className="shadow-sm">
          <Card.Header className="profile-header">
            <Card.Img variant="top" src={avatar} className="profile-img" />
          </Card.Header>              
          <Card.Body>
            <Card.Title className="font-weight-bold text-muted mt-3 user-name">{ user.fullname }</Card.Title>
            <Card.Text className="user-role">
              <FontAwesomeIcon icon="user-tag" className="mr-1 text-muted" /><i>{ user.role }</i>
              <Badge variant="warning ml-2">{ user.status }</Badge>
            </Card.Text>
            <Card.Text className="user-phone"><FontAwesomeIcon icon="mobile-alt" className="mr-1 text-muted" />{ user.phone }</Card.Text>
            <Card.Text className="user-city"><FontAwesomeIcon icon="map-marker-alt" className="mr-1 text-muted" />{ user.state }, Nigeria</Card.Text>
            <Card.Text className="user-rating rate-cont">
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon active" />
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon active" />
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon active" />
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon active" />
              <FontAwesomeIcon icon="star" className="mr-1 rate-icon" />
            </Card.Text>            
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center align-items-center b-0" style={{ background: 'transparent', height: 0, border: 0 }}>
            <Link to={`/profile/${user._id}`} className="fab-btn text-white mr-1 d-flex justify-content-center" title="View Profile">
              <FontAwesomeIcon icon="eye" className="mr-1" color="#fff" />
            </Link>
            <Button className="fab-btn text-white ml-1 d-flex justify-content-center" title="Share Profile">
              <FontAwesomeIcon icon="share-alt" className="mr-1" color="#fff" /></Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default ProfileCard;
