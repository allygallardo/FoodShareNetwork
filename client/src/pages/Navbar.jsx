import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { logout } from "../redux/userSlice";
import axios from "axios";
import styled from "styled-components";

const NavContainer = styled.div`
    width: 100vw;
    margin-top: -140px;
`

const User = styled.div`
  display: flex;
  align-item: center;
  padding-top: 20px;
  margin-right: 10px;
  gap: 10px;
  font-weight: 500;
`
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`
const Buttonsdiv = styled.div`
    display: flex;
    gap: 10px;
`
const Button = styled.button`
    color: #2d3436;
`

const Navbar = () => {
    const {currentUser} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = async () => {
      await axios.delete(`/students/${currentUser._id}`);
      // delete their posts as well?
      dispatch(logout(currentUser._id)) && navigate(`/`);
     }

    const handleLogout = async () => {
        dispatch(logout()) && navigate(`/`);
     }
    return (
        <>
            <NavContainer>
                <header>
                    <h1>FoodShare Network</h1>
                    <Buttonsdiv>
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
                    <Button onClick={handleDelete}>DELETE ACCOUNT</Button>
                    <Button onClick={handleLogout}>SIGN OUT</Button>
                </Buttonsdiv> 
                </header>
                <nav>
                    <Link to="/userlanding">Home</Link>
                    <Link to="/providerpage">Find Providers</Link>
                    <Link to="/userlanding">Order History</Link>
                    <Link to="/userlanding">Current Activity</Link>
                    <Link to="/communityhome">Community</Link>
                </nav>
            </NavContainer>
        </> 
    );
};

export default Navbar;