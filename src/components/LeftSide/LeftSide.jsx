import React, { useContext } from "react";
import { Image, ListGroup } from "react-bootstrap";
import { BsTv } from "react-icons/bs";
import { FaAngleDown, FaLandmark, FaRegClock, FaRegCreditCard, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const LeftSide = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="position-fixed">
      <ListGroup className="px-3">
        <Link to="/profile" className="text-decoration-none pt-4 d-flex align-items-center">
          <Image
            style={{ height: "40px", width: "40px" }}
            src={user ? user.photoURL : "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"}
            roundedCircle
          />
          <span className="text-dark fs-5 fw-semibold ps-3">
            {user ?  user.displayName : "Your profile"}
          </span>
        </Link>
        <Link className="text-decoration-none  pt-4 d-flex align-items-center">
          <FaUserFriends className="fs-2" />
          <span className="text-dark fs-5 fw-semibold ps-3 ">Friends</span>
        </Link>
        <Link className="text-decoration-none  pt-4 d-flex align-items-center">
          <FaRegClock className="fs-2" />
          <span className="text-dark fs-5 fw-semibold ps-3">Memories</span>
        </Link>
        <Link className="text-decoration-none pt-4 d-flex align-items-center">
          <FaRegCreditCard className="fs-2" />
          <span className="text-dark fs-5 fw-semibold ps-3">Most Recent</span>
        </Link>
        <Link className="text-decoration-none pt-4 d-flex align-items-center">
          <FaUsers className="fs-2" />
          <span className="text-dark fs-5 fw-semibold ps-3 ">Group</span>
        </Link>
        <Link className="text-decoration-none  pt-4 d-flex align-items-center">
          <FaLandmark className="fs-2" />
          <span className="text-dark fs-5 fw-semibold ps-3">Marketplace</span>
        </Link>
        <Link className="text-decoration-none pt-4 d-flex align-items-center">
          <BsTv className="fs-2" />
          <span className="text-dark fs-5 fw-semibold ps-3">Watch</span>
        </Link>
        <p className="fs-5  pt-4 "> <FaAngleDown className="fs-3 " /> See more</p>
        <hr />
        <h5>Your shortcuts</h5>
        <Link className="text-decoration-none pt-4">
          <Image
            title="Account"
            style={{ height: "40px", width: "40px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/295615759_554978976330432_4255247095307477379_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4mKrcwoDraIAX-FtUiF&_nc_ht=scontent.frjh5-1.fna&oh=00_AfBglhlVeDAVbPwKqJlcDJOHJ2_0ID4jt7lka3PDugvhkQ&oe=644FA2EE"
            roundedCircle
          />
          <span className="text-dark fs-5 fw-semibold ps-3">
          সত্য কথার লেখক
          </span>
        </Link>
        <Link  className="text-decoration-none pt-4">
          <Image
            title="Account"
            style={{ height: "40px", width: "40px" }}
            src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/342338327_747805533477669_5048118909121662210_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeECY_rAasvXQxlN7MjJuSVOjB3uYTpUBoqMHe5hOlQGiheUqgeBoXnysKbfWa_TlANAH59qi2Y0IIqhZA818IVY&_nc_ohc=lmj9AIxA7FsAX83vgR7&_nc_ht=scontent.frjh5-1.fna&oh=00_AfCQ7LTvgEgiw0_7zPKwapO-J_6T9mPk59f8QrMpYMkd-g&oe=644FB8E0"
            rounded
          />
          <span className="text-dark fs-5 fw-semibold ps-3">
          Complete Web Development
          </span>
        </Link>
      </ListGroup>
    </div>
  );
};

export default LeftSide;
