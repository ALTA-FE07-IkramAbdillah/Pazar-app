import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Button} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useLoginContext } from "../context";

function NavBar() {

  const {navLogin} = useLoginContext()

  return (
    <Navbar bg="light" expand="lg">
      {navLogin ?
        <Container>
          <Navbar.Brand className="navbar-brand fw-bold fs-1" href="#">
            Pazar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0 w-50 " style={{ maxHeight: "100px" }} navbarScroll>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active fw-bold fs-5 " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active fw-bold fs-5" aria-current="page" to="/products">
                    Product
                  </NavLink>
                </li>

                <Form className="d-flex w-75">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                </Form>
              </ul>
            </Nav>
            <Form className="buttons">
              <NavLink to="/cart" className="btn btn-outline-dark me-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart(0)
              </NavLink>
              <NavLink to="/profile" className="btn btn-outline-dark me-2">
                <i className="fa fa-user me-1"></i> Profile
              </NavLink>
            </Form>
          </Navbar.Collapse>
        </Container> :
        <Container>
          <Navbar.Brand className="navbar-brand fw-bold fs-1" href="#">
            Pazar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0 w-50 " style={{ maxHeight: "100px" }} navbarScroll>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active fw-bold fs-5 " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active fw-bold fs-5" aria-current="page" to="/products">
                    Product
                  </NavLink>
                </li>

                <Form className="d-flex w-75">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                </Form>
              </ul>
            </Nav>
            <Form className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark me-2">
                <i className="fa fa-sign-in  "></i> Login
              </NavLink>

              <NavLink to="/register" className="btn btn-outline-dark me-2">
                <i className="fa fa-user-plus  me-1"></i> Register
              </NavLink>

            </Form>
          </Navbar.Collapse>
        </Container>
      }
    </Navbar>
  );
}

export default NavBar;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
//         <div className="container">
//           <NavLink className="navbar-brand fw-bold fs-1" to="/">
//             Pazar
//           </NavLink>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink className="nav-link active fw-bold fs-5" aria-current="page" to="/">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link active fw-bold fs-5" aria-current="page" to="/products">
//                   Product
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link active fw-bold fs-5" aria-current="page" to="/about">
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link active fw-bold fs-5" aria-current="page" to="/contacts">
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//             <div className="buttons">
//               <NavLink to="/login" className="btn btn-outline-dark me-2">
//                 <i className="fa fa-sign-in  "></i> Login
//               </NavLink>
//               <NavLink to="/register" className="btn btn-outline-dark me-2">
//                 <i className="fa fa-user-plus  me-1"></i> Register
//               </NavLink>
//               <NavLink to="/cart" className="btn btn-outline-dark me-2">
//                 <i className="fa fa-shopping-cart me-1"></i> Cart(0)
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;
