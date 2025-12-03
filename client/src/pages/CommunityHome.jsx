import './communityhome.css';
import { Link, useNavigate } from "react-router-dom";

const CommunityHome = () => {

 return (
   <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Community Home | FoodShare Network</title>
      </head>
      <body>
        <header>
          <h1>FoodShare Network - Community</h1>
          <span class="settings-icon" title="Community Settings">⚙️</span>
        </header>
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