/* eslint-disable react/no-unescaped-entities */
import moment from "moment";
import React, { useContext, useState } from "react";
import { Card, Form, Image, Modal } from "react-bootstrap";
import { FaHeart, FaPen, FaRegCommentAlt, FaRegGrinSquint, FaRegThumbsUp, FaShare, FaThumbsUp, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const ProfilePost = ({post, handleDelete}) => {

    const { details, author, image_url, _id } = post;
  const [seeDetail, setSeeDetail] = useState(true);
    const [like, setLike] = useState(true);
    const {user} = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleProfilePost = (event) => {
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


        fetch(`https://facebook-demo-server.vercel.app/posts/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire("Updated!", "Your post has been Updated.", "success");
                form.reset()
            }
        })
    }



    return (
        <Card className="rounded-3 mb-3">
        <Card.Body>
           <div className="d-flex justify-content-between">
            <Card.Title className="d-flex">
              <Image
                style={{ height: "40px", width: "40px" }}
                src={author?.img}
                roundedCircle
              />
              <div className="ps-2">
                <h6>{author.name ? author.name : "Md Nasim hosen"}</h6>
                <p className="fw-normal mt-0" style={{ fontSize: "13px" }}>
                  {moment(author?.published_date).format("MMMM D, h:mm A")}
                </p>
              </div>
            </Card.Title>
            <div>
              <span
              style={{ cursor: "pointer" }}
                    className="w-100 border-0 bg-white"
                    onClick={handleShow}
                  >
                    <FaPen className="mx-2 fs-5" />
                  </span>

                  <Modal
                    style={{ marginTop: "100px" }}
                    show={show}
                    onHide={handleClose}
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handleProfilePost}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>What's on your mind?</Form.Label>
                          <Form.Control as="textarea" rows={8}
                          name="description"
                          defaultValue={details}
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
                            defaultValue={image_url}
                            placeholder="Enter post photo URL"
                            autoFocus
                          />
                        </Form.Group>
                      <input
                        className="w-100 bg-primary text-white py-1 border-0 rounded-2"
                        type="submit"
                        value="Save"
                      />
                      </Form>
                    </Modal.Body>
                  </Modal>
              <span style={{ cursor: "pointer" }}>
                <FaTrash
                  onClick={() => handleDelete(_id)}
                  className="mx-3 fs-5 text-danger"
                />
              </span>
            </div>
          </div>
          <Card.Text>
            {seeDetail && details.length > 260 ? (
              <>
                {details.slice(0, 260)}...{" "}
                <span
                  onClick={() => setSeeDetail(false)}
                  className="text-dark fw-semibold "
                >
                  See more
                </span>
              </>
            ) : (
              details
            )}
          </Card.Text>
          <Card.Img  variant="bottom" src={image_url} />
          <p className="px-2 pt-4"><FaThumbsUp className="text-white fs-5 bg-primary rounded-circle p-1" /><FaHeart className="text-white fs-5 bg-danger rounded-circle p-1" /><FaRegGrinSquint className="text-warning fs-5 " /> {like ? "Md" : 'You, Md'} and {like ? <span>17</span> : <span>18</span> } others</p>
          <div className="px-2">
          <hr />
          </div>
          <div className="d-flex justify-content-around pb-2">
          <div className="d-flex align-items-center">
          {
            like ? <span onClick={()=> setLike(false)}><FaRegThumbsUp className="fs-4 me-2"/></span> : <span onClick={() => setLike(true)}><FaThumbsUp className="fs-4 text-primary me-2"/></span>
          }
          <span>Like</span>
          </div>
          <div className="d-flex align-items-center">
          <span><FaRegCommentAlt className="fs-4  me-2"/></span>
          <span>Comment</span>
          </div>
          <div className="d-flex align-items-center">
          <span><FaShare className="fs-4 me-2"/></span>
          <span>Share</span>
          </div>
          </div>
        </Card.Body>
      </Card>
    );
};

export default ProfilePost;