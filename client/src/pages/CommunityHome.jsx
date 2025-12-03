import './communityhome.css';
import { Link } from "react-router-dom";
import Navbar from './Navbar.jsx';
import styled from "styled-components";

const CardContainer = styled.div`
    margin-top: 5rem;
    margin-left: 20rem;
    width: 90%;
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 1.5rem;
`

const CommunityHome = () => {

 return (
   <>
      <body>
        <Navbar/>
        <div class="container">
          <div class="card">
            <h2>View Community Blog Posts</h2>
            <p>Read updates, recipes, and stories from the FoodShare community.</p>
            <Link to ="/communityforum">
              <button>View Blog Posts</button>
            </Link>
          </div>
          <div class="card">
            <h2>View Your Posts</h2>
            <p>See all your published and drafted posts in one place.</p>
            <button>View My Posts</button>
          </div>
          <div class="card">
            <h2>Create New Blog Post</h2>
            <p>Share your story, recipes, or community updates with others.</p>
            <Link to ="/createpost">
              <button>Create Post</button>
            </Link>
          </div>
        </div>
      </body>
   </> 
 );
}
export default CommunityHome;