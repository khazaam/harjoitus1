import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

//Created from react tutorial
//This is the bar top of the screen containing the links in thhe navlink menu

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
            <NavLink to="/SecondAssigments" activeStyle>
              Second assigments for class
            </NavLink>
            <NavLink to="/PetNames" activeStyle>
              Pet names!
            </NavLink>
            <NavLink to="/DomiSivu" activeStyle>
              dom exercise 5.1
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  };
    
  export default Navbar;