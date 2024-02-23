import React from "react";
import {Navbar,Nav,NavDropdown,contanier, Container,Image} from 'react-bootstrap';
const Header =()=>{
    return(
        <header>
       <Navbar className= 'navbar-style' expand="lg">
        <Container>
        <Navbar.Brand href="#">
        <Image className='logo-img-style'src = 'image/logo.jpg' alt ='VTU' roundedCircle/>
        <h6 className="logo-text-style">Visvesvaraya Technological University,Belgavi</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About us </Nav.Link>
        <NavDropdown title="Acadmaic" id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
        <NavDropdown.Item href="#">circulars& notifications</NavDropdown.Item>
        <NavDropdown.Item href="#">certificate Issued</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="Examination " id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Examination gudline</NavDropdown.Item>
        <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
        <NavDropdown.Item href="#">Results</NavDropdown.Item>
     </NavDropdown>
     <NavDropdown title="VTU Deprtments " id="basic-nav-dropdown">
        <NavDropdown.Item href="#">civi Enginer</NavDropdown.Item>
        <NavDropdown.Item href="#">Computer Enginer</NavDropdown.Item>
        <NavDropdown.Item href="#">Mechanical Enginer</NavDropdown.Item>
     </NavDropdown>
     <NavDropdown title="Staff Logins " id="basic-nav-dropdown">
        <NavDropdown.Item href="#">Login As  Adminns</NavDropdown.Item>
        
     </NavDropdown>
    </Nav>
  </Navbar.Collapse>
        </Container>
        
       </Navbar>
        </header>
    )
}
export default Header