import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Providercard from "../components/Providercard";
import styled from "styled-components";

const Posts = styled.div`
    margin: 4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`;

const ProviderPage = () => {
    const [providers, setProviders] = useState([]);
    useEffect(() => {
            const fetchProviders = async () => {
              const res = await axios.get("/providers/all");
              setProviders(res.data);
            };
            fetchProviders();
          }, []);
    
    return (
        <>
            <Navbar/> 
            <Posts>
                {providers.map(provider=>(
                    <Providercard key={provider._id} provider = {provider}/>
                    ))}
            </Posts>
        </> 
    );
};

export default ProviderPage;