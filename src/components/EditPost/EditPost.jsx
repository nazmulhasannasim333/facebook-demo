/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { Button, Card, Form, Image, Modal } from "react-bootstrap";
import { FaImages, FaRegGrin, FaVideo } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from "../../providers/AuthProvider";

const EditPost = () => {
  const { user } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handlePost = (event) => {
    event.preventDefault()
    const form = event.target;
    const description = form.description.value;
    const photo = form.photo.value;
    const post = {
      details: description,
      image_url: photo,
      email: user.email,
      author: {
        name: user.displayName,
        published_date: new Date(),
        img: user.photoURL
      }
    }

    console.log(post);

    fetch(`https://facebook-demo-server.vercel.app/posts`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Post Successful',
          icon: 'Success',
          confirmButtonText: 'Ok'
        })
        form.reset();
      }
    })

  }
 

  return (
    
    <div className="">
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
                  <Button
                    className="w-100 border-0 bg-white"
                    onClick={handleShow}
                  >
                    <Form.Control
                      type="search"
                      placeholder="What's on your mind?"
                      className="rounded-5 py-2  bg-light border-0"
                      aria-label="Search"
                    />
                  </Button>

                  <Modal
                    style={{ marginTop: "100px" }}
                    show={show}
                    onHide={handleClose}
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handlePost}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Enter Post Description</Form.Label>
                          <Form.Control as="textarea" rows={8}
                          name="description"
                          placeholder="What's on your mind?"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Enter Post photo URL</Form.Label>
                          <Form.Control
                          className="py-3"
                          name="photo"
                            type="text"
                            placeholder="Enter post photo URL"
                            autoFocus
                          />
                        </Form.Group>
                      <input
                        className="w-100 bg-primary text-white py-1 border-0 rounded-2"
                        type="submit"
                        value="Post"
                      />
                      </Form>
                    </Modal.Body>
                  </Modal>
              </Form>
            </div>
          </Card.Title>
          <div>
            <hr />
          </div>
          <div className="d-flex justify-content-around py-2">
            <div className="d-flex align-items-center">
              <span>
                <FaVideo className="fs-4 text-danger me-2" />
              </span>
              <span className="fw-semibold text-secondary fs-5">
                Live Video
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span>
                <FaImages className="fs-4 text-success me-2" />
              </span>
              <span className="fw-semibold text-secondary fs-5">
                Photo/video
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span>
                <FaRegGrin className="fs-4 text-warning me-2" />
              </span>
              <span className="fw-semibold text-secondary fs-5">
                Feeling/activity
              </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditPost;
