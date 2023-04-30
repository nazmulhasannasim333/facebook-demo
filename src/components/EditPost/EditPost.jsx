import React, { useContext } from 'react';
import { Card, Form, Image } from 'react-bootstrap';
import { FaPhotoVideo, FaRegGrin, FaVideo } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const EditPost = () => {
  const {user} = useContext(AuthContext)
    return (
        <div className=''>
            <Card className="rounded-3">
        <Card.Body>
          <Card.Title className="d-flex">
            <Image
            style={{ height: "40px", width: "40px" }}
            src={
              user
                ? user.photoURL
                : "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
            }
            roundedCircle
          />
           <div className="px-2 w-100">
           <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="What's on your mind?"
                className="rounded-5 py-2  bg-light border-0"
                aria-label="Search"
              />
            </Form>
           </div>
          </Card.Title>
          <div className="px-2 ">
            <hr />
          </div>
          <div className="d-flex justify-content-around py-2">
          <div className="d-flex align-items-center">
          <span><FaVideo className="fs-4 text-danger me-2"/></span>
          <span>Live Video</span>
          </div>
          <div className="d-flex align-items-center">
          <span><FaPhotoVideo className="fs-4 text-success me-2"/></span>
          <span>Photo/video</span>
          </div>
          <div className="d-flex align-items-center">
          <span><FaRegGrin className="fs-4 text-warning me-2"/></span>
          <span>Feeling/activity</span>
          </div>
          </div>
        </Card.Body>
      </Card>
        </div>
    );
};

export default EditPost;




