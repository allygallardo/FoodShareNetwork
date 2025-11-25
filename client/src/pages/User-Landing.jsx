import './user-landing.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { userSlice } from '../redux/userSlice';
import { logout } from "../redux/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

import styled from "styled-components";
const User = styled.div`
  display: flex;
  align-item: center;
  gap: 10px;
  font-weight: 500;
`
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`

const UserLanding = () => {
  const {currentUser} = useSelector(state=>state.user);
  const dispatch = useDispatch();

  const handleDelete = async () => {
      await axios.delete(`/students/${currentUser._id}`);
      // delete their posts as well?
      dispatch(logout(currentUser._id));
     }

 return (
   <>
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Landing Page - User | FoodShare Network</title>
    </head>
      <body>
        <header>
          <h1>FoodShare Network - User Dashboard</h1>
          {currentUser ? (
            <User>
              <Avatar/>
              {currentUser.username}
            </User>
             ) : (
             <Link to ="/" style={{ textDecoration: "none"}}>
            <button>
              SIGN IN
            </button>
          </Link>)}
          <span class="settings-icon" title="User Settings">⚙️</span>
          <button onClick={handleDelete}>DELETE ACCOUNT</button>
        </header>


        <div class="container">
          <div class="card activity-log">
            <h2>Current Activity</h2>
            <ul>
              <li>Green Grocery has 10% off all produce</li>
              <li>Food Pantry 4 Students offering commodities Nov. 7th </li>
            </ul>
          </div>

          <div class="card order-box">
            <h2>Current Order</h2>
            <p><strong>Order #1841</strong></p>
            <p>Status: <span>Ready for pickup</span></p>
            <button>View Order History</button>
          </div>


          <div class="card community-box">
            <h2>Community</h2>
            <p>Connect, share, and help others in your area.</p>
            <button >Go to Community Page</button>
          </div>

          <div class="card providers-box">
            <h2>Find Providers</h2>
            <p>Search for nearby food pantries or partner stores.</p>
            <button>Search Providers</button>
          </div>
        </div>
      </body>
   </>
 );
}
export default UserLanding;