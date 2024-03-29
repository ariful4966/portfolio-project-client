import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import "./CreatePost.css";
import PostForm from "./PostForm";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    webUrl: "",
    gitUrl: "",
    category: "",
  });
  const [lang, setLang] = useState([]);

  const [selectImage, setSelectImage] = useState({});
  const [success, setSuccess] = useState({});

  const handleImageChange = (e) => {
    const formData = new FormData();

    formData.append("image", e.target.files[0]);
    formData.append("key", "728e01f09644e0f352e9cc932b5e2b1c");

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setSelectImage(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [modal, setModal] = useState("");

  const handleBlur = (e) => {
    const newPost = { ...post };
    newPost[e.target.name] = e.target.value;
    setPost(newPost);
  };
  const handleLangArray = (e) => {
    const value = e.target.value.split(" ");

    setLang(value);
  };

  const cookies = new Cookies();
  const access_token = cookies.get("ariful");
  // Web App Post
  const handleWebPost = (e) => {
    e.preventDefault();

    post.image = {
      display_url: selectImage.data.display_url,
      delete_url: selectImage.data.delete_url,
    };
    post.lang = lang;

    fetch("https://ruby-zealous-ostrich.cyclic.app/web/create", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        accesstoken: access_token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setSuccess(json);
      });
  };

  // Blog App Post
  const handleBlogPost = (e) => {
    e.preventDefault();

    post.image = {
      display_url: selectImage.data.display_url,
      delete_url: selectImage.data.delete_url,
    };

    fetch("https://ruby-zealous-ostrich.cyclic.app/blog/create", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        accesstoken: access_token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setSuccess(json);
      });
  };

  //Mobile App Post
  const handleMobilePost = (e) => {
    e.preventDefault();

    post.image = {
      display_url: selectImage.data.display_url,
      delete_url: selectImage.data.delete_url,
    };
    post.lang = lang;

    fetch("https://ruby-zealous-ostrich.cyclic.app/mobile/create", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        accesstoken: access_token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setSuccess(json);
        
      });
  };
  return (
    <div>
      <div className="tab_area d-flex justify-content-center">
        <Button
          className="m-5"
          onClick={() => {
            setModal("Web");
          }}
        >
          Create Web Post
        </Button>
        <Button
          className="m-5"
          onClick={() => {
            setModal("Blog");
          }}
        >
          Create Blog Post
        </Button>
        <Button
          className="m-5"
          onClick={() => {
            setModal("Mobile");
          }}
        >
          Create Mobile Post
        </Button>
      </div>

      <div className="">
        {modal === "Web" && (
          <PostForm
            handleBlur={handleBlur}
            handleImageChange={handleImageChange}
            setModal={setModal}
            modal={modal}
            handleWebPost={handleWebPost}
            selectImage={selectImage}
            handleLangArray={handleLangArray}
            success={success}
          />
        )}
        {modal === "Blog" && (
          <PostForm
            handleBlur={handleBlur}
            handleImageChange={handleImageChange}
            setModal={setModal}
            modal={modal}
            handleBlogPost={handleBlogPost}
            selectImage={selectImage}
            success={success}
          />
        )}
        {modal === "Mobile" && (
          <PostForm
            handleBlur={handleBlur}
            handleImageChange={handleImageChange}
            setModal={setModal}
            modal={modal}
            handleMobilePost={handleMobilePost}
            selectImage={selectImage}
            handleLangArray={handleLangArray}
            success={success}
          />
        )}
      </div>
    </div>
  );
};

export default CreatePost;
