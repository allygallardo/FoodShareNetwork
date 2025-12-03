import React, { useState } from "react";
import axios from "axios";
import './community-create-post.css';
import { Link } from "react-router-dom";

// have to add back the cancel post function
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 180%;
`


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState(undefined);


    const addPost = async (e) => {
        e.preventDefault();
        const newPost = {title, description, img};
        try{
         const res = await axios.post("/posts", newPost);
         console.log(res);
      }catch(err){
         console.log(err)
      }
    };

return (
    <>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Create Blog Post | FoodShare Network</title>
        </head>
            <div class="container">
                <Form>
                <h2>Create a New Blog Post</h2>
                    <label for="title">Blog Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter your blog title..." required onChange={e=>setTitle(e.target.value)}/>

                    <label for="content">Blog Content</label>
                     <textarea id="content" name="content" placeholder="Write your post here..." required onChange={e=>setDescription(e.target.value)}></textarea>

                    <label for="mediaUpload">Upload Photo or Video (optional)</label>
                    <input type="file" id="mediaUpload" name="mediaUpload" accept="image/*,video/*" onChange={e=>setImg(e.target.value)}/>

                    <div class="button-group">
                        <Link to ="/communityforum">
                            <button type="submit" class="publish-btn" onClick={addPost}>Publish</button>
                            <button type="button" class="cancel-btn" onclick="cancelPost()">Cancel</button>
                        </Link>
                    </div>
                </Form>
            </div>
    </>
      
 );
}
export default CreatePost;