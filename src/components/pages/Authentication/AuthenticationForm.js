import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAuthInput } from "../../../redux/actions";

const AuthenticationForm = ({ handleLogin, handleSignUp, auth }) => {
  const dispatch = useDispatch();
  return (
    <Form onSubmit={auth === "Login" ? handleLogin : handleSignUp}>
      {auth === "Sign Up" && (
        <Form.Group className="mb-3" controlId="forFullName">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Full Name"
            name="name"
            onBlur={(e) => dispatch(getAuthInput(e))}
          />
          <Form.Text className="text-muted">
            We'll never share your Name with anyone else.
          </Form.Text>
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onBlur={(e) => dispatch(getAuthInput(e))}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onBlur={(e) => dispatch(getAuthInput(e))}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AuthenticationForm;
