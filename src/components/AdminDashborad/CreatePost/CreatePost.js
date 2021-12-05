import React, { useState } from "react";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    about: "",
    webUrl: "",
    gitUrl: "",
    category: "",
  });

  const handleBlur = (e)=>{
    const newPost = {...post}
    newPost[e.target.name]=e.target.value
    setPost(newPost)
  }
  console.log(post);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Post Title</Form.Label>
          <Form.Control type="text" placeholder="title" name="title" onBlur={handleBlur}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="about" onBlur={handleBlur}/>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3" >
          <Form.Label>Upload Project Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Row className="g-2">
          <Col md>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Website Link</Form.Label>
              <Form.Control type="text" placeholder="Your Website Link" name="webUrl" onBlur={handleBlur}/>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>GitHub Link</Form.Label>
              <Form.Control type="text" placeholder="Your GitHub Link" name="gitUrl" onBlur={handleBlur}/>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select Your Project category</Form.Label>
          <Form.Select aria-label="Default select example" name="category" onBlur={handleBlur}>
          <option>Open this select menu</option>
          <option value="ecomarce">eComarce</option>
          <option value="blog">Blog</option>
          <option value="protfolio">Protfolio</option>
        </Form.Select>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
