import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
//import {format} from "timeago.js";

const PostContainer = styled.div`
    background: #f1f2f6;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
    &:hover{
    background: #dfe6e9;
    transform: translateY(-2px)};
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;

      &:hover{
    opacity: 0.90;
    transform: scale(0.90);
    }
`;



const Title = styled.h1`
    font-size: 1.2rem;
    color: #2d3436;
    margin: 0;
    font-weight: bold;
`;

const UserName = styled.h2`
  font-size: 30px;
  margin: 9px 0px;
`;

const Info = styled.div`
      font-size: 0.9rem;
      color: #636e72;
      margin-top: 0.3rem;
`;

const Postcard = ({type, post}) => {
    const [username, setUsername] = useState({});

    useEffect(() => {
        const fetchUsername = async () => {
            const res = await axios.get(`/students/find/${post.studentID}`);
            setUsername(res.data);
        };
        fetchUsername();
    }, [post.studentID]);

    return (
        <Link to={`/post/${post._id}`} style ={{textDecoration:"none"}}>
        <PostContainer type={type}>
            <Title>{post.title}</Title>
            <Info>{post.description}</Info>
        </PostContainer>
        </Link>
    );
};

export default Postcard;