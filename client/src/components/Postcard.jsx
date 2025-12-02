import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
//import {format} from "timeago.js";

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
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

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const Texts = styled.div`
    margin-left: 20px;`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
`;

const UserName = styled.h2`
  font-size: 30px;
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
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
        <Container type={type}>
            <Image
                type={type}
                src={post.imgURL}
            />
            <Details type={type}>
                <Texts>
                    <Title>{post.title}</Title>
                    <Info>{post.description}</Info>
                </Texts>
            </Details>
        </Container>
        </Link>
    );
};

export default Postcard;