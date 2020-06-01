import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import BlogItem from './BlogItem/BlogItem';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('https://portfolio-server-00.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlog(data);
            })
    }, []);
    return (
        <div className="blogPage latestBlog ">
            <Container>
                <Row>
                    {
                        blog.map(blog => <BlogItem blog={blog}></BlogItem>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;