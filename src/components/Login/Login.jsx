import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {loginUser, googleLogin, githubLogin, facebookLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

    loginUser(email, password)
    .then(result => {
      const signinUser = result.user;
      console.log(signinUser);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(error => console.log(error))
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const signinGoogle = result.user;
      console.log(signinGoogle);
      navigate("/")
    })
    .catch(error => console.log(error))
  }
  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      const signinGithub = result.user;
      console.log(signinGithub);
      navigate("/")
    })
    .catch(error => console.log(error))
  }
  const handleFacebook = () => {
    facebookLogin()
    .then(result => {
      const signinFacebook = result.user;
      console.log(signinFacebook);
      navigate("/")
    })
    .catch(error => console.log(error))
  }

  return (
    <Container
      className=" mx-auto my-5 bg-white px-5 py-4 shadow-lg"
      style={{ width: "500px" }}
    >
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="py-2"
            type="email"
            name="email"
            placeholder="Enter your password address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="py-2"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Button variant="primary" className="w-100 py-2" type="submit">
          Login
        </Button>
        <br />
        <p className="text-secondary text-center pt-4"><Link to="/register">Create new account</Link>
        </p>
        <Button onClick={handleGoogleLogin} variant="outline-success" className="w-100 mt-3" type="submit">
          <Link className="text-decoration-none text-success"><FaGoogle className="fs-5"/> Login with Google</Link>
        </Button>
        <Button onClick={handleFacebook} variant="outline-primary" className="w-100 mt-3" type="submit">
          <Link className="text-decoration-none "><FaFacebook className="fs-5" /> Login with Facebook</Link>
        </Button>
        <Button onClick={handleGithubLogin} variant="outline-secondary" className="w-100 mt-3" type="submit">
          <Link className="text-decoration-none text-secondary"><FaGithub className="fs-5" /> Login with Github</Link>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
