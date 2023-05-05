import moment from "moment";
import React, { useContext, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { FaHeart, FaRegCommentAlt, FaRegGrinSquint, FaRegThumbsUp, FaShare, FaThumbsUp } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const ProfileCard = () => {
    const [like, setLike] = useState(true);
    const {user} = useContext(AuthContext);

    
    return (
        <div className="pt-3 ">
     
      <Card className="rounded-3">
        <Card.Body>
          <Card.Title className="d-flex">
            <Image
            style={{ height: "40px", width: "40px" }}
            src={
              user
                && user.photoURL
            }
            roundedCircle
          />
           <div className="ps-2">
            <h6>{user && user.displayName}</h6>
            <p className="fw-normal mt-0" style={{fontSize: '13px'}}>{moment().format('MMMM D, h:mm A')}</p>
           </div>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repellendus ab! Qui ratione quos quas esse neque sint maxime id.
          </Card.Text>
          <Card.Img  variant="bottom" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1683267606~exp=1683268206~hmac=272f6bd069815a68d6602dd8b5713a8fff87cc85bdbbe516c8f498f52ebe65ed" />
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
    </div>
    );
};

export default ProfileCard;