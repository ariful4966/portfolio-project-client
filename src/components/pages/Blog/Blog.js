import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../Header/Header";
import BlogItem from "./BlogItem/BlogItem";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);
  return (
    <div className="blogPage latestBlog ">
      <Header />
      <div className="page_padding">
        <Container>
          <Row>
            {blog.map((blog) => (
              <BlogItem blog={blog}></BlogItem>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
