import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cookies from 'universal-cookie';
import "./CreateProfile.css";
const cookies = new Cookies();

const CreateProfile = ({ closeModal }) => {
  const { user } = useSelector((state) => state);
  const [profiles, setProfiles] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    bio: "",
    village: "",
    upozila: "",
    division: "",
    country: "",

    web_url: "",
    git_url: "",
    fb_url: "",
    ld_url: "",
  });
  
  const blurHandler = (e) => {
    const newpro = { ...profiles };

    newpro[e.target.name] = e.target.value;
    setProfiles(newpro);
  };
  const access_token = cookies.get('ariful')

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://web-portfolio-server.herokuapp.com/profile/create", {
      method: "POST",
      body: JSON.stringify(profiles),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "accessToken": access_token
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="modal_wrapper">
      <div className="modal_header">
        <h2>Profile create</h2>
        <FontAwesomeIcon onClick={closeModal} icon={faTimes} />
      </div>

      <div className="modal_body">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onBlur={blurHandler}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onBlur={blurHandler}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Phone Number"
              name="phone"
              onBlur={blurHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Proffessional Title"
              name="title"
              onBlur={blurHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter you Short Bio"
              name="bio"
              onBlur={blurHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Row className="g-2">
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Village Or Road"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Village Or Road No"
                    name="village"
                    onBlur={blurHandler}
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Upozila">
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Upozila"
                    name="upozila"
                    onBlur={blurHandler}
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Division">
                  <Form.Control
                    type="text"
                    placeholder="Your Devision"
                    name="division"
                    onBlur={blurHandler}
                  />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Your Country"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Country"
                    name="country"
                    onBlur={blurHandler}
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="social_link" name="links">
            <Form.Label>Social Links</Form.Label>
            <Row>
              <Col md={6} className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Enter Website URL"
                  name="web_url"
                  onBlur={blurHandler}
                />
              </Col>
              <Col md={6} className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Enter Git URL"
                  name="git_url"
                  onBlur={blurHandler}
                />
              </Col>
              <Col md={6} className="mb-2">
                <Form.Control
                  placeholder="Enter  Facebook URL"
                  name="fb_url"
                  type="text"
                  onBlur={blurHandler}
                />
              </Col>
              <Col md={6} className="mb-2">
                <Form.Control
                  placeholder="Enter LinkedIn URL"
                  name="ld_url"
                  type="text"
                  onBlur={blurHandler}
                />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateProfile;
