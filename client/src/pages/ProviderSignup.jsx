import './signup.css';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import styled from "styled-components";

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

const ProviderSignup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const handleSignup = async (e) => {
          e.preventDefault();
          dispatch(loginStart())
          try{
             const res = await axios.post("/auth/providersignup", {email, username, password, number});
             dispatch(loginSuccess(res.data)) && navigate(`/providersignin`);
          }catch(err){
             dispatch(loginFailure());
          }
       }
 return (
   <>
        <Container>
            <h1>FoodShare Network</h1>
            <form id="userForm" className="active">
                <label for="userEmail">Email</label>
                <input type="email" id="userEmail" placeholder="Enter your email..." required onChange={(e)=>setEmail(e.target.value)}/>

                <label for="userUsername">Username</label>
                <input type="text" id="userUsername" placeholder="Choose a username..." required onChange={(e)=>setUsername(e.target.value)}/>

                <label for="userPhone">Number</label>
                <input type="text" id="userNumber" placeholder="Enter your phone number..." required onChange={(e)=>setNumber(e.target.value)}/>

                <label for="userPassword">Password</label>
                <input type="password" id="userPassword" placeholder="Create a password..." required onChange={(e)=>setPassword(e.target.value)}/>

                <button type="submit" className="login-button" onClick={handleSignup} >Sign Up as Provider</button>
                <p className="forgot-password-sign-up">Already have an account? <a href="/providersignin">Log in</a></p>
            </form>
        </Container>
   </>
 );
}
export default ProviderSignup;