import axios from 'axios';
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
  const [successMessage, setSuccessMessage]= useState('')
  const [message, setMessage]=useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const handleBlur = e=>{
    const newMessage = {...message}
    newMessage[e.target.name]=e.target.value;
    setMessage(newMessage)
  }
  const handleSubmit = event =>{
    event.preventDefault();
    axios.post('https://web-portfolio-server.herokuapp.com/send', message)
    .then(res=>{
      setSuccessMessage(res.data.message);
    })
    .catch(err=>{
      console.log(err);
    })
    
  }

  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control type="text" placeholder="Type Your Name" name="name" onBlur={handleBlur} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" placeholder="Type Your Email" name="email" onBlur={handleBlur} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Your Subject</Form.Label>
        <Form.Control type="text" placeholder="Define Your Matter" name="subject" onBlur={handleBlur} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Your Comment Or Suggestion</Form.Label>
        <Form.Control as="textarea" rows={5}  name="message" onBlur={handleBlur}/>
      </Form.Group>
      <Button className="ms-auto d-block" style={{background:'#0e3453'}} type="submit">Send</Button>
      {
        successMessage && <p className="text-success"><strong>{successMessage}</strong></p>
      }
    </Form>
  );
};

export default ContactForm;
