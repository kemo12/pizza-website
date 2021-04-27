import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../SideBar"
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from "./HeroElements"; 
const index = () => {
    return (
        <>
            <HeroContainer>
                <Navbar/>
                <Sidebar></Sidebar>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Pizza Ever</HeroH1>
                        <HeroP>Ready in 60 seconds</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>    
        ) 
}

export default index
