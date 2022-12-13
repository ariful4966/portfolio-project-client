import {
    faFacebookF,
    faGithub,
    faLinkedinIn,
    faWeebly
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import avatar from "../../../assets/images/02.png";
import { userProfileInfo } from "../../../redux/actions";
import Paragraph from "../../partials/Paragraph";
import SubTitle from "../../partials/SubTitle";
import Title from "../../partials/Title";
import CreateProfile from "./CreateProfile/CreateProfile";
import "./Profile.css";
const cookies = new Cookies();

const Profile = () => {
  const [create, setCreate] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => setCreate(!create);
  const closeModal = () => setCreate(false);

  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profiles);
 

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    const formData = new FormData();

    formData.append("image", event.target.files[0]);
    formData.append("key", "728e01f09644e0f352e9cc932b5e2b1c");

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setSelectedFile(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const token = cookies.get("ariful");

  const handleSubmission = () => {
    user.delete_url = selectedFile.data.delete_url;
    user.display_url = selectedFile.data.display_url;

    fetch("https://ruby-zealous-ostrich.cyclic.app/profile/photo", {
      method: "POST",
      body: JSON.stringify({
        user,
        profilePic: {
          delete_url: selectedFile.data.delete_url,
          display_url: selectedFile.data.display_url,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        accessToken: token,
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    fetch("https://ruby-zealous-ostrich.cyclic.app/profile", {
      headers: {
        accesstoken: token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(userProfileInfo(json));
      });
  }, [token, dispatch]);
console.log(profile);
  return (
    <div className="user_profile">
      <Row>
        <Col md={3}>
          <div className="userPic">
            
            {
              (profile && profile.profilePic) ?  <Image src={profile.profilePic.display_url} rounded /> : <Image src={avatar} rounded />
            }

            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control type="file" size="lg" onChange={changeHandler} />
              <Button onClick={handleSubmission}>upload</Button>
            </Form.Group>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={8}>
          <div className="user_info">
            { 
            profile && profile.name? 
              <Button>Edit Profile</Button>
            : 
              <Button onClick={openModal}>Create Profile</Button>
            }
            {
            
            (profile && profile.name) ? 
            <>
            <div className="user_name">
              <Title h2> {profile && "Name: " + profile.name}</Title>
            </div>
            <div className="user_others">
              <div className="ms-3">
                <Title h4>
                  {profile && "Profession: " + profile.title}
                </Title>
                <SubTitle h5>{`Email: ` + profile.user.email}</SubTitle>
                <SubTitle h5>
                  {`Mobile Number: ` + profile.phone}
                </SubTitle>
              </div>
              <article>
                <Title h3>
                  {profile.address && "Parmenant Address:"}
                </Title>
                <Paragraph className="ms-4">
                  <label>Village: {profile.address.village}</label>
                  <br />
                  <label>Upozila: {profile.address.upozila}</label>
                  <br />
                  <label>District: {profile.address.division}</label>
                  <br />
                  <label>Country: {profile.address.country}</label>
                  <br />
                </Paragraph>
              </article>

              <article>
                <Title h3>{profile.links && "Your Social Links:"}</Title>
                <Paragraph className="ms-4 social_link">
                  <a href={profile.links.fb_url} target={"_blank"}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href={profile.links.git_url} target={"_blank"}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={profile.links.ld_url} target={"_blank"}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href={profile.links.web_url} target={"_blank"}>
                    <FontAwesomeIcon icon={faWeebly} />
                  </a>
                </Paragraph>
              </article>
              <article>
                <Title h3>{profile.bio && "About Myself: "}</Title>
                <Paragraph className="ms-5">
                  {profile.bio && profile.bio}
                </Paragraph>
              </article>
              <Title h4>{`Role of this site: ${
                profile.user.role === "admin"
                  ? "Administator"
                  : "Normal User"
              }`}</Title>
              <section>
                {profile.user && (
                  <>
                    <Title h4>Your All Post: </Title>
                    <Paragraph className="ms-3">
                      <label>
                        Website Post: {profile.user.webApp.length}
                      </label>{" "}
                      <span>, </span>
                      <label>
                        Mobile App Post: {profile.user.mobile.length}
                      </label>
                      <span>, </span>
                      <label>
                        Blog Post: {profile.user.blog.length}
                      </label>
                    </Paragraph>
                  </>
                )}
              </section>
            </div>
          </>
              
            : <>
                <div className="user_name">
                  <Title h3>You Have No Profile Information</Title>
                </div>
              </>
             
                }
          </div>
        </Col>
      </Row>
      {create && <CreateProfile closeModal={closeModal} />}
    </div>
  );
};

export default Profile;
