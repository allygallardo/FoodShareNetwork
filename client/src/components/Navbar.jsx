import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header>
                <h1>FoodShare Network</h1>
                <span class="settings-icon" title="Settings">⚙️</span>
                </header>
            <nav>
                <Link to="/userlanding">Home</Link>
                <Link to="/userlanding">Find Providers</Link>
                <Link to="/userlanding">Order History</Link>
                <Link to="/userlanding">Current Activity</Link>
                <Link to="/communityhome">Community</Link>
            </nav>
        </> 
    );
};

export default Navbar;