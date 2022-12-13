import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PostForm = ({
  handleBlur,
  handleImageChange,
  modal,
  setModal,
  handleMobilePost,
  handleWebPost,
  handleBlogPost,
  selectImage,
  handleLangArray,
  success,
}) => {
  return (
    <div className="post_area">
      <Form
        onSubmit={
          (modal === "Web" && handleWebPost) ||
          (modal === "Blog" && handleBlogPost) ||
          (modal === "Mobile" && handleMobilePost)
        }
      >
        <div className="form_heading d-flex justify-content-between">
          <h2>Create A New {modal} Post</h2>
          {success.message && (
            <p className="text-success text-center">{success.message}</p>
          )}
          <FontAwesomeIcon onClick={() => setModal("")} icon={faTimes} />
        </div>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            name="title"
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="body"
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Project Image</Form.Label>
          <Form.Control type="file" name="file" onChange={handleImageChange} />
          {selectImage.data && (
            <p className="text-success">Image is successfull post</p>
          )}
        </Form.Group>

        <Row className="g-2">
          <Col md>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Website Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Website Link"
                name="webUrl"
                onBlur={handleBlur}
              />
            </Form.Group>
          </Col>
          {(modal === "Web" || modal === "Mobile") && (
            <Col md>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>GitHub Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your GitHub Link"
                  name="gitUrl"
                  onBlur={handleBlur}
                />
              </Form.Group>
            </Col>
          )}
        </Row>
        {(modal === "Web" || modal === "Mobile") && (
          <>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Languages</Form.Label>
              <Form.Control
                type="text"
                placeholder="React, Node, Javascript, Html, css"
                name="lang"
                onBlur={handleLangArray}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select Your Project category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="category"
                onBlur={handleBlur}
              >
                <option>Open this select menu</option>
                <option value="ecomarce">eComarce</option>
                <option value="blog">Blog</option>
                <option value="protfolio">Protfolio</option>
                <option value="personal">Personal Use</option>
              </Form.Select>
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
