import React, { useContext } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { FaBookOpen, FaHeart, FaHouseDamage, FaMapMarkerAlt, FaRegClock, FaRegEdit, FaWifi } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import EditPost from "../EditPost/EditPost";
import ProfileCard from "../ProfileCard/ProfileCard";

const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
      <div >
      <Container>
      <Image style={{height: "450px", width: "100%"}} src="https://img.freepik.com/premium-photo/hands-holding-smartphone-social-media-concept_23-2150208265.jpg?w=1380" fluid rounded />
      </Container>
      <div >
        <Card className="rounded-3 pt-5 border-0">
        <Container >
        <Card.Body >
          <Card.Title className="d-flex align-items-center justify-content-between ">
           <div className="ps-2 d-flex align-items-center ">
           <Image
            style={{ height: "170px", width: "170px"}}
            src={
              user
                && user.photoURL
            }
            roundedCircle
          />
            <div className="ps-3">
            <h3>{user && user.displayName}</h3>
            <p className="fw-normal mt-0" style={{fontSize: '18px'}}>{user ? user.email : "Not show"}</p>
            </div>
           </div>
           <div>
           <Button variant="primary">+ Add to story</Button>
           <Button className="ms-2" variant="secondary"><FaRegEdit /> Edit Profile</Button>
           </div>
          </Card.Title>
          <div className="py-3">
            <hr />
           </div>
           <div className="d-flex align-items-center">
            <li className="list-unstyled  fs-5">Post</li>
            <li className="list-unstyled ps-5 fs-5">About</li>
            <li className="list-unstyled ps-5 fs-5">Friends</li>
            <li className="list-unstyled ps-5 fs-5">Photos</li>
            <li className="list-unstyled ps-5 fs-5">Videos</li>
            <li className="list-unstyled ps-5 fs-5">Check-ins</li>
            <li className="list-unstyled ps-5 fs-5">More</li>
           </div>
        </Card.Body>
        </Container>
      </Card>
      <Container className="mx-auto mt-3">
      <Row>
        <Col >
         <Card >
      <Card.Body>
        <Card.Title>Intro</Card.Title>
        <Card.Text className="text-center my-4 mx-2">
          Some quick example text to example text to build on the card title and make up the
          bulk of the build on the card build on the card content. build on the card title and make up the
          bulk of the example text to build on the card title and make up the
          bulk of the content. content.
        </Card.Text>
        <Button className="w-100" variant="light">Edit bio</Button>
        <div className="my-3">
            <li className="list-unstyled fs-5"><FaBookOpen className="pe-2 text-secondary fs-3"/> Studies at <span className="fw-semibold">Govt. Shaheed Bulbul College, Pabna</span></li>
            <li className="list-unstyled pt-3 fs-5"><FaBookOpen className="pe-2 text-secondary fs-3"/> Studied at <span className="fw-semibold">Hazi Jasim Uddin Degree Collage,dublia </span> </li>
            <li className="list-unstyled pt-3 fs-5"><FaBookOpen className="pe-2 text-secondary fs-3"/> Went to <span className="fw-semibold">Dublia High School, Dublia, Pabna</span></li>
            <li className="list-unstyled pt-3 fs-5"><FaHouseDamage className="pe-2 text-secondary fs-3"/> Lives in <span className="fw-semibold">Pabna</span></li>
            <li className="list-unstyled pt-3 fs-5"><FaMapMarkerAlt className="pe-2 text-secondary fs-3"/> From <span className="fw-semibold">Pabna</span></li>
            <li className="list-unstyled pt-3 fs-5"><FaHeart className="pe-2 text-secondary fs-3"/> Single</li>
            <li className="list-unstyled pt-3 fs-5"><FaRegClock className="pe-2 text-secondary fs-3"/> Joined February 2016</li>
            <li className="list-unstyled pt-3 fs-5"><FaWifi className="pe-2 text-secondary fs-3"/> Followed by <span className="fw-semibold">2,667 people</span></li>
           </div>

      </Card.Body>
    </Card>
    </Col>
        <Col>
        <EditPost />
        <ProfileCard />
        </Col>
      </Row>
      </Container>
      </div>
      </div>
    
  );
};

export default Profile;
