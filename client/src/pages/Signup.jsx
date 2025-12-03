import './signup.css';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const handleSignup = async (e) => {
          e.preventDefault();
          dispatch(loginStart())
          try{
             const res = await axios.post("/auth/signup", {email, username, password})
             dispatch(loginSuccess(res.data)) && navigate(`/userlanding`)
          }catch(err){
             dispatch(loginFailure())
          }
       }
 return (
   <>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>FoodShare Network - Sign Up</title>
        </head>
        <div className="container">
            <h1>FoodShare Network</h1>

            <form id="userForm" className="active">
                <label for="userEmail">Email</label>
                <input type="email" id="userEmail" placeholder="Enter your email..." required onChange={e=>setEmail(e.target.value)}/>

                <label for="userUsername">Username</label>
                <input type="text" id="userUsername" placeholder="Choose a username..." required onChange={e=>setUsername(e.target.value)}/>

                <label for="userPassword">Password</label>
                <input type="password" id="userPassword" placeholder="Create a password..." required onChange={e=>setPassword(e.target.value)}/>

                <button type="submit" className="login-button" onClick={handleSignup} >Sign Up as User</button>
                <p className="forgot-password-sign-up">Already have an account? <a href="/">Log in</a></p>
            </form>
        </div>
   </>
 );
}
export default Signup;