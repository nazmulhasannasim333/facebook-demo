import moment from "moment";
import React, { useContext, useState } from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaHeart,
  FaRegCommentAlt,
  FaRegGrinSquint,
  FaRegThumbsUp,
  FaShare,
  FaThumbsUp
} from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Post = ({ post }) => {
  const { details, author, image_url, _id } = post;
  const [seeDetail, setSeeDetail] = useState(true);
  const [like, setLike] = useState(false);
  const { user } = useContext(AuthContext);



  return (
    <div className="pt-3 mx-5">
      <Card className="rounded-3">
        <Card.Body>
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
          <Card.Img variant="bottom" src={image_url} />
          <p className="px-2 pt-4">
            <FaThumbsUp className="text-white fs-5 bg-primary rounded-circle p-1" />
            <FaHeart className="text-white fs-5 bg-danger rounded-circle p-1" />
            <FaRegGrinSquint className="text-warning fs-5 " />{" "}
            {!like ? "Md" : "You, Md"} and{" "}
            {!like ? <span>17</span> : <span>18</span>} others
          </p>
          <div className="px-2">
            <hr />
          </div>
          <div className="d-flex justify-content-around pb-2">
            <div className="d-flex align-items-center ">
              {user && like ? (
                <span onClick={() => setLike(false)}>
                  <FaThumbsUp className="fs-4 text-primary me-2" />
                </span>
              ) : (
                <span onClick={() => setLike(true)}>
                  <FaRegThumbsUp className="fs-4 me-2" />
                </span>
              )}
              <span>Like</span>
            </div>
            <div className="d-flex align-items-center">
              <span>
                <FaRegCommentAlt className="fs-4  me-2" />
              </span>
              <span>Comment</span>
            </div>
            <div className="d-flex align-items-center">
              <span>
                <FaShare className="fs-4 me-2" />
              </span>
              <span>Share</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
