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
          <Card.Img  variant="bottom" src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/343758723_1194370587932647_9015285138075439897_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGv1hys2kxnLEQJQXJ5TUMZX_vCxED9z2tf-8LEQP3Pax9b-69L0xdtLZIJOuvdE5QMDnQOkFsDu0hLvSz3-Xtp&_nc_ohc=jHWVE1fxEXoAX_3zq51&_nc_ht=scontent.frjh5-1.fna&oh=00_AfBdbB43e6e4oiqSOU0zWMkHh-xwyyhSi_Pf9qV2_fK8xw&oe=64514DE6" />
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