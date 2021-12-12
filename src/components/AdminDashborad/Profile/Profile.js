import React, { useState } from "react";
import { Col, Image, Row, Button, Form } from "react-bootstrap";
import avatar from "../../../assets/images/02.png";
import "./Profile.css";
import CreateProfile from "./CreateProfile/CreateProfile";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Profile = () => {
  const [create, setCreate] = useState(false);
  const openModal = () => setCreate(!create);
  const closeModal = () => setCreate(false);
  const user = useSelector(state=>state.user)

  const [selectedFile, setSelectedFile] = useState();
  console.log(selectedFile);

  const changeHandler = (event) => {
    const formData = new FormData();

    formData.append("image", event.target.files[0]);
    formData.append("key", "728e01f09644e0f352e9cc932b5e2b1c")

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setSelectedFile(result)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const token = cookies.get('ariful')

  const handleSubmission = () => {
    
    user.delete_url = selectedFile.data.delete_url;
    user.display_url = selectedFile.data.display_url

    fetch('http://localhost:4000/profile/photo', {
        method: "POST",
        body: JSON.stringify({
            user,
            profilePic: {
                delete_url:selectedFile.data.delete_url,
                display_url: selectedFile.data.display_url
            }
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "accessToken": token
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  };

  return (
    <div className="user_profile">
      <Row>
        <Col md={3}>
          <div className="userPic">
            <Image src={avatar} rounded />
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Large file input example</Form.Label>
              <Form.Control type="file" size="lg" onChange={changeHandler} />
              <Button onClick={handleSubmission}>upload</Button>
            </Form.Group>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={8}>
          <div className="user_info">
            <Button onClick={openModal}>Create Profile</Button>
            <div className="user_name">
              <h3>Md. Ariful Islam</h3>
            </div>
            <div className="user_others">
              <h4>Adminstator Admin</h4>
              <h4>Professional Web Developer</h4>
            </div>
          </div>
        </Col>
      </Row>
      {create && <CreateProfile closeModal={closeModal} />}
    </div>
  );
};

export default Profile;
