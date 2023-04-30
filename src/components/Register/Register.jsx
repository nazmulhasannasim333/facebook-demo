import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

  const {createUser, profileUpdate} = useContext(AuthContext);
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false)


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,  email, password);

    createUser(email, password)
    .then(result => {
      const signUpUser = result.user;
      console.log(signUpUser);
      form.reset();
      navigate('/')

      profileUpdate(name, photo)
      .then(() => {
        console.log("profile updated");
      })
      .catch(error => console.log(error))

    })
    .catch(error => console.log(error))
  }

  const handleCheck = (event) => {
    setAccepted(event.target.checked);
  }


  return (
    <Container
      className=" mx-auto my-5 bg-white p-5 shadow-lg"
      style={{ width: "500px" }}
    >
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className="py-2"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Your photoURL</Form.Label>
          <Form.Control
            className="py-2"
            type="text"
            name="photo"
            placeholder="Enter your photoURL"
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleCheck}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to="/terms">Term & Conditions</Link></>}
          />
        </Form.Group>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <Button variant="primary" disabled={!accepted} className="w-100 py-2" type="submit">
          Register
        </Button>
        <br />
        <p className="text-secondary text-center pt-4">
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;