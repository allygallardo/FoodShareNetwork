import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Postcard from '../components/Postcard.jsx'
import axios from "axios";
import './communityforum.css';
import Navbar from './Navbar.jsx';

const Container = styled.div `
    margin-top: 2rem;
    margin-left: 30rem;
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    padding: 2rem;
    width: 90%;
    max-width: 700px; 
    display: flex;
    flex-direction: column;`


const PostsContainer = styled.div`
`;

const CommunityForum = () => {
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
            <h2>Community Blog Forum</h2>

            <div class="top-buttons">
                <button>All Posts</button>
                <button>Your Posts</button>
                <Link to ="/createpost">
                    <button>Create New Post</button>
                </Link>
            </div>
            <PostsContainer>
                {posts.map(post=>(
                        <Postcard key={post._id} post = {post}/>
                ))}
                <p class="footer-text">New posts appear from newest to oldest.</p>
            </PostsContainer>
            
        </Container>
        </>
    )
};

export default CommunityForum;