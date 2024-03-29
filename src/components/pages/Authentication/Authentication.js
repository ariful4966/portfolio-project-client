import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import Cookies from "universal-cookie";
import logo from "../../../assets/images/logo.png";
import Paragraph from '../../partials/Paragraph';
import Title from "../../partials/Title";
import "./Authentication.css";
import AuthenticationForm from "./AuthenticationForm";
const cookies = new Cookies();

const Authentication = () => {
  const [auth, setAuth] = useState("Login");
  const [message, setMessage] = useState({});
  let history = useHistory();
  let location = useLocation();
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = async (e) => {
    e.preventDefault();

    await fetch("https://ruby-zealous-ostrich.cyclic.app/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        await cookies.set("ariful", data.accesss_token);
        setMessage(data);
      });

    history.replace(from);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    await fetch("https://ruby-zealous-ostrich.cyclic.app/user/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setMessage(json);
      });
  };
  const handleAuthForm = () => {
    if (auth === "Login") {
      setAuth("Sign Up");
    } else {
      setAuth("Login");
    }
  };
  



  return (
    <>
      {
        message && message.message && <Paragraph className="text-success text-center mt-5" size={40}>{message.message}</Paragraph>
      }
      {
        message && message.error && <Paragraph className="text-danger text-center mt-5" size={40}>{message.error}</Paragraph>
      }
      <div className="authentication_area">
        <div className="authentication_box">
          <div className="auth_logo">
            <img src={logo} alt="LOGO" />
          </div>
          <div className="authentication_title">
            <Title h1>{auth}</Title>
          </div>
          <div className="authentication_Form">
            <AuthenticationForm
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              auth={auth}
            />
          </div>
          {auth === "Login" ? (
            <p onClick={handleAuthForm}>Create New Account</p>
          ) : (
            <p onClick={handleAuthForm}>Are You already have a account</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Authentication;
