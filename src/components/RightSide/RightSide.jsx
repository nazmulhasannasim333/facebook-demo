import React from "react";
import { Image, ListGroup } from "react-bootstrap";
import { FaBullhorn, FaComments, FaSearch, FaUserCircle, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const friends = [
  {
    name: "Rachel Green",
    image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=1380&t=st=1683268061~exp=1683268661~hmac=78bc748cb93fd0bb56462c095681f170832b4937ba84e063d8466f61d9d73230",
  },
  {
    name: "Monica Geller",
    image: "https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?w=1380&t=st=1683268099~exp=1683268699~hmac=6d37eb3f671fef20df5a7001d723c98a4700cfd82caad22aa901d3103269ddf3",
  },
  {
    name: "Phoebe Buffay",
    image: "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-crossed-arms_176420-15567.jpg?w=1380&t=st=1683268121~exp=1683268721~hmac=258e8f3663f64933ca289e90e129a08bd07710bd3d314dcb8571ecbd11835035",
  },
  {
    name: "Joey Tribbiani",
    image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1380&t=st=1683268144~exp=1683268744~hmac=c6a2fa89f500eb2ab4b81ff8e5a2bcd2f738912aa5a8b8a5403281d358b98beb",
  },
  {
    name: "Chandler Bing",
    image: "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=1380&t=st=1683268168~exp=1683268768~hmac=c039245f5f5ead117a06a8d4272b5176b4f23231e6232525ea9270957db1a8c5",
  },
  {
    name: "Ross Geller",
    image: "https://img.freepik.com/premium-photo/young-businessman-isolated-white_53419-207.jpg?w=826",
  },
  {
    name: "Janice Hosenstein",
    image: "https://img.freepik.com/premium-photo/ambition-gets-you-far-i-can-testify-that-portrait-confident-mature-businessman-standing-office-with-his-colleagues-background_590464-47752.jpg?w=826",
  },
  {
    name: "Gunther",
    image: "https://img.freepik.com/free-photo/portrait-happy-mature-businessman-with-folded-arms_23-2147955369.jpg?w=1380&t=st=1683268269~exp=1683268869~hmac=4629b197c01ec1f22329239d160a4e5570e26aec5ec0b0ff27eaccccd236b066",
  },
  {
    name: "Mike Hannigan",
    image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1060&t=st=1683268302~exp=1683268902~hmac=e5f5ddd5741e635acb76dbd9d1a320c8fefdc674a2468cdd63ffa5e911fa9bd8",
  },
  {
    name: "David",
    image: "https://img.freepik.com/free-photo/joy-happiness-positive-reaction-handsome-charismatic-european-man-with-radiant-broad-smile-posing-blank-yellow-wall-with-copy-space-your-advertising-content-keeping-arms-folded_343059-4615.jpg?w=1380&t=st=1683268325~exp=1683268925~hmac=257bb67db23ea8b53c17c55fc88d6437cf4dbcf88686fe04859868a0775cd5eb",
  },
];

const RightSide = () => {
    return (
        <div className="position-fixed">
      <ListGroup className="px-3">
      <h5 className="pt-4">Your Pages and profiles</h5>
      <Link className="text-decoration-none pt-4 ps-1 d-flex align-items-center">
          <Image
            style={{ height: "35px", width: "35px" }}
            src="https://img.freepik.com/free-photo/fingers-note-report-journalist-filling_1150-1044.jpg?w=1380&t=st=1683268353~exp=1683268953~hmac=523c6eb2baaae2f74193f2f86ba827bf3941c3e3f57b1ea0be26203780b82556"
            roundedCircle
          />
          <span className="text-dark fs-6  ps-3">
          সত্য কথার লেখক
          </span>
        </Link>
        <Link className="text-decoration-none text-secondary pt-4 ps-4 d-flex align-items-center">
          <FaComments className="fs-4" />
          <span className="text-dark  ps-3">11 Messages</span>
        </Link>
        <Link className="text-decoration-none text-secondary pt-4 ps-4 d-flex align-items-center">
          <FaUserCircle className="fs-4" />
          <span className="text-dark  ps-3">Switch into Page</span>
        </Link>
        <Link className="text-decoration-none text-secondary pt-4 ps-4 d-flex align-items-center">
          <FaBullhorn className="fs-4" />
          <span className="text-dark  ps-3">Create Promotion</span>
        </Link>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
        <h5>Contacts</h5>
        <div className="me-5">
        <FaVideo className="me-4" />
        <FaSearch />
        </div>
        </div>

        {
          friends.map((friend, i) => <Link key={i} className="text-decoration-none ps-1 pt-4 d-flex align-items-center">
          <Image
            style={{ height: "35px", width: "35px" }}
            src={friend.image}
            roundedCircle
          />
          <span className="text-dark fw-semibold ps-3" style={{fontSize: '18px'}}>
            {friend.name}
          </span>
        </Link> )
        }
       
      </ListGroup>
    </div>
    );
};

export default RightSide;