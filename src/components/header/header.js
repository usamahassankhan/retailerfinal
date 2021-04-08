



import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import logo from './../../assets/ibuy_logo.PNG';
import { auth } from "../../Firebase/Firebase";
import './index.css';
import {  Redirect } from 'react-router-dom';
class NavbarPage extends Component {
state = {
  isOpen: false,
  mod:false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
logoutfnc = () => {
alert("are u sure");
auth.signOut().then(() => {
 console.log("log out success")
}).catch((error) => {
  alert("error",error)
  // An error happened.
});
// localStorage.setItem("rememberMe",false);
localStorage.clear();
// if(localStorage.getItem("rememberMe")==false){

// }

 window.location.reload(); 
{/* <Redirect to='/'/>; */}
}

render() {
  return (
    <>
    
      <MDBNavbar  className="mainbavbar" dark expand="md">
        <MDBNavbarBrand  >
       
          {/* <MDBNavLink to="./" activeClassName="active">
          </MDBNavLink> */}
           <a href="./"  className="MAINHEAD">
          <img src={logo} className="logo"/>
          </a>
       
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {/* <MDBNavItem activeClassName='active'>
              <NavLink to="./storeform">Create Store</NavLink>
            
            </MDBNavItem> */}
            <MDBNavItem activeClassName='active'>
              <NavLink to="./templates">Templates</NavLink>
              {/* <a href="./templates"  className="MAINHEAD1">Templates</a> */}
            </MDBNavItem>
            <MDBNavItem activeClassName="active">
              <NavLink to="./plans">Plans</NavLink>
              {/* <a href="./plans"  className="MAINHEAD1">Plans</a> */}
            </MDBNavItem>
            {/* <MDBNavItem activeClassName="active">
              
              <a href="./planform"  className="MAINHEAD1">Create Plan</a>
            </MDBNavItem>
            <MDBNavItem activeClassName="active">
            
              <a href="./editplan"  className="MAINHEAD1">Delete Plan</a>
            </MDBNavItem>
             */}
      
         
          </MDBNavbarNav>
          <MDBNavbarNav center >
          <MDBNavItem activeClassName="actives">
              <NavLink className="MAINHEAD" to="./">IBUY RETAILER APP</NavLink>
          {/* <a href=" ./"  className="MAINHEAD">IBUY RETAILER APP</a> */}
            </MDBNavItem>
            </MDBNavbarNav>
      
          <MDBNavbarNav right>
           
          
          <MDBNavItem activeClassName="active">
              <NavLink to="./signup">SignUp</NavLink>
              {/* <a href=" ./signup"  className="MAINHEAD1">SignUp</a> */}
            </MDBNavItem>
            {localStorage.getItem("rememberMe")?(
               <MDBNavItem activeClassName="active">
               {/* <NavLink to="/" onClick={()=>this.setState({mod:!this.state.mod})}>Logout</NavLink> */}
               <NavLink to="/"  refresh="true" onClick={()=>this.logoutfnc()}>Logout</NavLink>
               {/* <a href="./"  className="MAINHEAD1">Login</a> */}
             </MDBNavItem>
            )
            :
         (  
              <MDBNavItem activeClassName="active">
              <NavLink to="./"  refresh="true">Login</NavLink>
              {/* <a href="./"  className="MAINHEAD1">Login</a> */}
            </MDBNavItem>
            )
}

    
         
         
             
            
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
      
   </>
    );
  }
}

export default NavbarPage;