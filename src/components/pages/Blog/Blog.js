import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";
import Loading from "../../partials/Loading/Loading";
import BlogItem from "./BlogItem/BlogItem";

const Blog = () => {
 const blog = useSelector(state=> state.blog)
  return (
    <div className="blogPage latestBlog ">
      <Header />
      <div className="section_padding">
        <Container>
          <Row>
            {
              blog.length === 0 ? <Loading/> 
              : blog.map((blog) => (
                <BlogItem blog={blog} key={blog._id}></BlogItem>
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
