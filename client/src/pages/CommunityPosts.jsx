import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Postcard from '../components/Postcard.jsx'
import axios from "axios";
import Navbar from "../components/Navbar.jsx";

const Container = styled.div`
    justify-content: space-between;
`;

const CommunityPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/posts/all");
          setPosts(res.data);
        };
        fetchPosts();
      }, []);

    return (
        <>
        <Navbar/>
        <Container>
            {posts.map(post=>(
                <Postcard key={post._id} post = {post}/>
            ))}
        </Container>
        </>
    )
};

export default CommunityPosts;