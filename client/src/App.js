// Import dependencies
import React from "react";

// Pages
import StudentLogin from "./pages/StudentLogin.jsx"; 
import Signup from "./pages/Signup.jsx";
import CommunityHome from "./pages/CommunityHome.jsx";
import CommunityForum from "./pages/CommunityForum.jsx";
import UserLanding from "./pages/User-Landing.jsx";
import CreatePost from "./pages/Community-create-post.jsx";
import ProviderLogin from "./pages/ProviderLogin.jsx";
import ProviderSignup from "./pages/ProviderSignup.jsx";
import ProviderLanding from "./pages/Provider-Landing.jsx";
import EditProviderProfile from "./pages/EditProviderProfile.jsx";
import ProviderPage from "./pages/ProviderPage.jsx";

// Navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<StudentLogin/>}/>
          <Route path="/studentsignup" element={<Signup/>}/>
          <Route path="/communityhome" element={<CommunityHome/>}/>
          <Route path="/communityforum" element={<CommunityForum/>}/>
          <Route path="/userlanding" element={<UserLanding/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
          <Route path="/providersignin" element={<ProviderLogin/>}/>
          <Route path="/providersignup" element={<ProviderSignup/>}/>
          <Route path="/providerlanding" element={<ProviderLanding/>}/>
          <Route path="/editproviderprofile" element={<EditProviderProfile/>}/>
          <Route path="/providerpage" element={<ProviderPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
