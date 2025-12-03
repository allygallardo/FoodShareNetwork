import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import './login.css';
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";


const Container = styled.div`
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 14px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
  transition: all 0.3s ease;
`

const StudentLogin = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch(); // from react redux
   const navigate = useNavigate();

   const handleLogin = async (e) => {
      e.preventDefault();
      dispatch(loginStart())
      try{
         const res = await axios.post("/auth/studentsignin", {username, password})
         dispatch(loginSuccess(res.data)) && navigate(`/userlanding`)
      }catch(err){
         dispatch(loginFailure())
      }
   }

 
 return (
   <>
         <Container>
            <h1>FoodShare Network</h1>
            <div className="option-buttons">
               <button id="userButton" className="active">User Login</button>
               <Link to ="/providersignin">
                  <button id="providerButton">Provider Login</button>
               </Link>
            </div>
         

         <form id="userForm" className="active">
            <label>Username</label>
               <input type="text" id="userEmail" placeholder="Enter your username..." required onChange={e=>setUsername(e.target.value)}/>

            <label>User Password</label>
            <input type="password" id="userPassword" placeholder="Enter your password..." required onChange={e=>setPassword(e.target.value)}/>

            <button type="submit" className="login-button" onClick={handleLogin}>Login as User</button>
            <p className="forgot-password-sign-up">Don’t have an account? <a href="/studentsignup">Sign up</a></p>
            <p className="forgot-password-sign-up">Forgot your password? <a href="#">Reset</a></p>
         </form>
      </Container>
      
         
   </>
      
 );
}
export default StudentLogin;