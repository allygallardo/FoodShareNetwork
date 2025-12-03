// Import dependencies
import React from "react";

// Pages
import Login from "./pages/Login.jsx"; 
import Signup from "./pages/Signup.jsx";
import CommunityHome from "./pages/CommunityHome.jsx";
import CommunityForum from "./pages/CommunityForum.jsx";
import UserLanding from "./pages/User-Landing.jsx";
import CreatePost from "./pages/Community-create-post.jsx";

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
          <Route path="/communityforum" element={<CommunityForum/>}/>
          <Route path="/userlanding" element={<UserLanding/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
