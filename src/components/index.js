import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

//Created from react tutorial

const Navbar = () => {
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink to="/FirstPage" activeStyle>
              First page
            </NavLink>
            <NavLink to="/SecondPage" activeStyle>
              Second page
            </NavLink>
            <NavLink to="/ThirdPage" activeStyle>
              Third page
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  };
    
  export default Navbar;