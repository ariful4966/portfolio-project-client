import React from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control type="email" placeholder="Type Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" placeholder="Type Your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Subject</Form.Label>
        <Form.Control type="email" placeholder="Define Your Matter" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Comment Or Suggestion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button>Send</Button>
    </Form>
  );
};

export default ContactForm;
