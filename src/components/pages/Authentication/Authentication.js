import React, { useState } from "react";
import AuthenticationForm from "./AuthenticationForm";
import logo from "../../../assets/images/logo.png";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import "./Authentication.css";
import Title from "../../partials/Title";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { useEffect } from "react";
const cookies = new Cookies();

const Authentication = () => {
  const [auth, setAuth] = useState("Login");
  let history = useHistory();
  let location = useLocation();
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleLogin = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(async(data) => {
       await cookies.set("ariful", data.accesss_token);
        console.log(data);
      });

    history.replace(from);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:4000/user/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const handleAuthForm = () => {
    if (auth === "Login") {
      setAuth("Sign Up");
    } else {
      setAuth("Login");
    }
  };

  useEffect(()=>{

  }, [])

  return (
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
  );
};

export default Authentication;
