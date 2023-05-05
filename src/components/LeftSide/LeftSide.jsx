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
            src="https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?w=1380&t=st=1683268353~exp=1683268953~hmac=523c6eb2baaae2f74193f2f86ba827bf3941c3e3f57b1ea0be26203780b82556"
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
            src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=1380&t=st=1683268464~exp=1683269064~hmac=11461d33795cc5751d6d22da72306e19dae74495b795c3719dd6d9e566cc5a54"
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
