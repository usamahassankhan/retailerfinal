// import React, { Component } from "react";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
// MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
// class NavbarPage extends Component {
// state = {
//   isOpen: false
// };

// toggleCollapse = () => {
//   this.setState({ isOpen: !this.state.isOpen });
// }

// render() {
//   return (
//     <Router>
//       {/* <MDBNavbar color="default-color" dark expand="md"> */}
//       <MDBNavbar className="mainbavbar" dark expand="md">
//         <MDBNavbarBrand>
//           <strong className="white-text">Navbar</strong>
//         </MDBNavbarBrand>
//         <MDBNavbarToggler onClick={this.toggleCollapse} />
//         <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
//           <MDBNavbarNav left>
//             <MDBNavItem active>
//               <MDBNavLink to="#!">Home</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="#!">Features</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="#!">Pricing</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <div className="d-none d-md-inline">Dropdown</div>
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu className="dropdown-default">
//                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem>
//           </MDBNavbarNav>
//           <MDBNavbarNav right>
//             <MDBNavItem>
//               <MDBNavLink className="waves-effect waves-light" to="#!">
//                 <MDBIcon fab icon="twitter" />
//               </MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink className="waves-effect waves-light" to="#!">
//                 <MDBIcon fab icon="google-plus-g" />
//               </MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <MDBIcon icon="user" />
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu className="dropdown-default">
//                   <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBNavbar>
//     </Router>
//     );
//   }
// }

// export default NavbarPage;




import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './../../assets/ibuy_logo.PNG';
import './index.css';
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <>
    
      <MDBNavbar  className="mainbavbar" dark expand="md">
        <MDBNavbarBrand  to="./">
       
          <MDBNavLink to="./" activeClassName="active">
          <img src={logo} className="logo"/>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem activeClassName='active'>
              <MDBNavLink to="./storeform">Create Store</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem activeClassName="active">
              <MDBNavLink to="./deletestore">Delete Store</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem activeClassName="active">
              <MDBNavLink to="./planform">Create Plan</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem activeClassName="active">
              <MDBNavLink to="./editplan">Delete Plan</MDBNavLink>
            </MDBNavItem>
            
      
         
          </MDBNavbarNav>
          <MDBNavbarNav left >
          <MDBNavItem activeClassName="actives">
              <MDBNavLink className="MAINHEAD" to="./">IBUY RETAILER APP</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
      
          <MDBNavbarNav right>
           
          
          <MDBNavItem activeClassName="active">
              <MDBNavLink to="./signup">SignUp</MDBNavLink>
            </MDBNavItem>
              <MDBNavItem activeClassName="active">
              <MDBNavLink to="./">Login</MDBNavLink>
            </MDBNavItem>
    
         
         
             
            
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
   </>
    );
  }
}

export default NavbarPage;