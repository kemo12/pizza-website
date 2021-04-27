import React from 'react'
import {SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SideRoute} from "./SideBarElements";
const Sidebar = () => {
    return (
        <SidebarContainer>
          <Icon>
             <CloseIcon/> 
          </Icon>  
          <SidebarMenu>
              <SidebarLink to="/">Pizzas</SidebarLink>
              <SidebarLink to="/">Desserts</SidebarLink>
              <SidebarLink to="/">Full Menu</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SideRoute to="/">Order Now</SideRoute>
          </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
