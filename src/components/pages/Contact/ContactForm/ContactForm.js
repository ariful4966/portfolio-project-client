import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState({
    success: "",
    error: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  let isValid = true;
  const handleBlur = (e) => {
    setSuccessMessage({ success: "", error: "" });
    if (e.target.name === "name" && e.target.value === "") {
      isValid = false;
    }
    if (e.target.name === "email" && e.target.value === "") {
      isValid = false;
    }
    if (e.target.name === "subject" && e.target.value === "") {
      isValid = false;
    }
    if (e.target.name === "message" && e.target.value === "") {
      isValid = false;
    }

    if (isValid) {
      const preError = { ...error };
      preError[e.target.name] = ``;
      setError(preError);

      const newMessage = { ...message };
      newMessage[e.target.name] = e.target.vaule;
      setMessage(newMessage);
    } else {
      const newError = { ...error };
      newError[e.target.name] = `${e.target.name} is require`;
      setError(newError);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let msg;

    if (
      isValid &&
      error.name === "" &&
      error.email === "" &&
      error.subject === "" &&
      error.message === ""
    ) {
      emailjs
        .sendForm(
          "gmail",
          "template_3d7ad64",
          form.current,
          "user_f4DFGaACffywwJeWWeDPi"
        )
        .then(
          (result) => {
            if(result.status === 200)
             msg = {
              ...successMessage,
              success: 'Your message successfully send'
            }
            setSuccessMessage(msg)
          },
          (error) => {
             msg = {
              ...successMessage,
              error: "Sorry Your Message Not Send Something Error",
            };
            setSuccessMessage(msg)
            console.log(error);

          }
        );
    } else {
      msg = {
        ...successMessage,
        error: "Sorry Your Message Not Send Something Error",
      };

      setSuccessMessage(msg);
    }
  };
  return (
    <>
      {successMessage.success !== "" ? (
        <p className="text-success">
          <strong>{successMessage.success}</strong>
        </p>
      ) : (
        <p className="text-danger">
          <strong>{successMessage.error}</strong>
        </p>
      )}
      <Form ref={form} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type Your Name"
            name="name"
            onBlur={handleBlur}
          />
          {error.name && <p className="text-danger">{error.name}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Type Your Email"
            name="email"
            onBlur={handleBlur}
          />
          {error.email && <p className="text-danger">{error.email}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Define Your Matter"
            name="subject"
            onBlur={handleBlur}
          />
          {error.subject && <p className="text-danger">{error.subject}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Comment Or Suggestion</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            onBlur={handleBlur}
          />
          {error.message && <p className="text-danger">{error.message}</p>}
        </Form.Group>
        <Button
          className="ms-auto d-block"
          style={{ background: "#0e3453" }}
          type="submit"
        >
          Send
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
