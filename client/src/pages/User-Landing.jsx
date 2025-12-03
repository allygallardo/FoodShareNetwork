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

const UserLanding = () => {

 return (
   <>
        <Navbar/>
        <CardContainer>
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
            <p>Status: Ready for pickup</p>
            <button>View Order History</button>
          </div>

          <div class="card community-box">
            <h2>Community</h2>
            <p>Connect, share, and help others in your area.</p>
            <Link to ="/communityhome">
              <button>Go to Community Page</button>
            </Link>
          </div>

        <div class="card providers-box">
          <h2>Find Providers</h2>
          <p>Search for nearby food pantries or partner stores.</p>
          <Link to ="/providerpage">
              <button>Search Providers</button>
            </Link>
        </div>
      </CardContainer>

   </>
 );
}
export default UserLanding;