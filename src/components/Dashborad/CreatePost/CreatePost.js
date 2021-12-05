import React from "react";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

const CreatePost = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Post Title</Form.Label>
          <Form.Control type="text" placeholder="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Project Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Row className="g-2">
          <Col md>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Website Link</Form.Label>
              <Form.Control type="text" placeholder="title" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>GitHub Link</Form.Label>
              <Form.Control type="text" placeholder="title" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
