// Import dependencies
import React from "react";

// Pages
import Login from "./pages/Login.jsx"; 
import Signup from "./pages/Signup.jsx";
import CommunityHome from "./pages/CommunityHome.jsx";
import CommunityPosts from "./pages/CommunityPosts.jsx";
import UserLanding from "./pages/User-Landing.jsx";

//components

// Navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Login/>}/>//
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/communityhome" element={<CommunityHome/>}/>
          <Route path="/communityposts" element={<CommunityPosts/>}/>
          <Route path="/userlanding" element={<UserLanding/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
