import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";
import Loading from "../../partials/Loading/Loading";
import BlogItem from "./BlogItem/BlogItem";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://web-portfolio-server.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);
  return (
    <div className="blogPage latestBlog ">
      <Header />
      <div className="section_padding">
        <Container>
          <Row>
            {
              blog.length === 0 ? <Loading/> 
              : blog.map((blog) => (
                <BlogItem blog={blog}></BlogItem>
              ))
            }
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
