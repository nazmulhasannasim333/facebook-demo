import React, { useContext, useRef, useState } from "react";
import {
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  Overlay,
  Popover,
} from "react-bootstrap";
import { BsTv } from "react-icons/bs";
import {
  FaAppStore,
  FaArrowCircleRight,
  FaBell,
  FaChessBoard,
  FaFacebook,
  FaFacebookMessenger,
  FaGamepad,
  FaHome,
  FaLandmark,
  FaQuestionCircle,
  FaRegMoon,
  FaUsers,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { logout, user } = useContext(AuthContext);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("logout successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="position-sticky top-0" style={{ zIndex: "9999" }}>
      <Navbar className="py-2 shadow-sm" bg="white" expand="lg">
        <Container fluid>
          <Link to="/">
            <FaFacebook className="fs-1 me-2" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Facebook"
                className="rounded-5 py-2 pe-xxl-5 bg-light border-0"
                aria-label="Search"
              />
            </Form>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px", margin: "0 auto" }}
              navbarScroll
            >
              <NavLink
                title="Home"
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary mx-5" : "text-secondary mx-5"
                }
              >
                <FaHome className="fs-2 me-4" />
              </NavLink>
              <Link title="Watch" className="text-secondary mx-5">
                <BsTv className="fs-2 me-4" />
              </Link>
              <Link title="MArketplace" className="text-secondary mx-5">
                <FaLandmark className="fs-2 me-4" />
              </Link>
              <Link title="Group" className="text-secondary mx-5">
                <FaUsers className="fs-2 me-4" />
              </Link>
              <Link title="Gamming" className="text-secondary mx-5">
                <FaGamepad className="fs-2 me-4" />
              </Link>
            </Nav>

            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                title="Menu"
                className="text-dark me-2 bg-light p-2 rounded-circle "
              >
                <FaChessBoard className="fs-4 " />
              </Link>
              <Link
                title="Mesenger"
                className="text-dark me-2 bg-light p-2 rounded-circle"
              >
                <FaFacebookMessenger className="fs-4" />
              </Link>
              <Link
                title="Notifications"
                className="text-dark me-2 bg-light p-2 rounded-circle"
              >
                <FaBell className="fs-4" />
              </Link>
              <div onClick={handleClick}>
                <Image
                  title="Account"
                  style={{ height: "45px", width: "45px" }}
                  src={
                    user
                      ? user.photoURL
                      : "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                  }
                  roundedCircle
                />

                <div ref={ref}>
                  <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={20}
                  >
                    <Popover id="popover-contained">
                      <Popover.Body>
                        <Link
                          to="/profile"
                          className="text-decoration-none pt-1 d-flex align-items-center"
                        >
                          <Image
                            style={{ height: "40px", width: "40px" }}
                            src={
                              user
                                ? user.photoURL
                                : "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                            }
                            roundedCircle
                          />
                          <span className="text-dark fs-5 fw-semibold ps-3">
                            {user ? user.displayName : "Your profile"}
                          </span>
                        </Link>
                        <div>
                          <hr />
                        </div>
                        <Link className="text-decoration-none pt-1 d-flex align-items-center">
                          <FaAppStore className="fs-5 text-secondary" />
                          <span className="text-dark fs-5 fw-semibold ps-2">
                            Settings & privacy
                          </span>
                        </Link>
                        <Link className="text-decoration-none pt-4 d-flex align-items-center">
                          <FaQuestionCircle className="fs-5 text-secondary" />
                          <span className="text-dark fs-5 fw-semibold ps-2">
                            Help & support
                          </span>
                        </Link>
                        <Link className="text-decoration-none pt-4 d-flex align-items-center">
                          <FaRegMoon className="fs-5 text-secondary" />
                          <span className="text-dark fs-5 fw-semibold ps-2">
                            Display & accessibility
                          </span>
                        </Link>
                        {user ? (
                          <Link
                            onClick={handleLogout}
                            to="/login"
                            className="text-decoration-none py-4  d-flex align-items-center"
                          >
                            <FaArrowCircleRight className="fs-5 text-secondary" />
                            <span className="text-dark fs-5 fw-semibold ps-2">
                              Log Out
                            </span>
                          </Link>
                        ) : (
                          <Link
                            onClick={handleLogout}
                            to="/login"
                            className="text-decoration-none py-4  d-flex align-items-center"
                          >
                            <FaArrowCircleRight className="fs-5 text-secondary" />
                            <span className="text-dark fs-5 fw-semibold ps-2">
                              LogIn
                            </span>
                          </Link>
                        )}
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
