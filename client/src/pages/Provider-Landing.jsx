import './provider-landing.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ProviderNavbar from './ProviderNavbar';

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


const ProviderLanding = () => {
   
 return (
   <>
        <ProviderNavbar/>
        <CardContainer>
            <div class="card">
                <h2>Add to Inventory</h2>
                <p>Update your available stock.</p>
                <button>Manage Inventory</button>
            </div>

            <div class="card">
                <h2>Notification Configuration</h2>
                <p>Send alerts to subscribers for sales or restocks.</p>
                <button >Configure Notifications</button>
            </div>

            <div class="card">
                <h2>View Current Storefront</h2>
                <p>Preview your store as users see it and check your current offerings.</p>
                <button >View Storefront</button>
            </div>

            <div class="card">
                <h2>Profile Settings</h2>
                <p>Update your organization’s information, contact details, and preferences.</p>
                <Link to ="/editproviderprofile">
                    <button >Edit Profile</button>
                </Link>
            </div>
        </CardContainer>
   </>
      
 );
}
export default ProviderLanding;