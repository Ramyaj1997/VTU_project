import React from "react";
import {Navbar,Nav,NavDropdown,contanier, Container,Image} from 'react-bootstrap';
import { LinkContainer  } from 'react-router-bootstrap';

const Header =()=>{
    return(
        <header>
       <Navbar className= 'navbar-style' expand="lg">
        <Container>
<LinkContainer to='/'>
        <Navbar.Brand href="/">
        <Image className='logo-img-style'src = 'image/logo.jpg' alt ='VTU' roundedCircle/>
        <h6 className="logo-text-style">Visvesvaraya Technological University,Belgavi</h6>
        </Navbar.Brand>


</LinkContainer>


        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
    <LinkContainer to='/'>

    <Nav.Link href="#home">Home</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/about'>
    <Nav.Link href="#link">About us </Nav.Link>
    </LinkContainer>
      
      
        <NavDropdown title="Acadmaic" id="basic-nav-dropdown">
          <LinkContainer to ='/admissions'>
          <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='/circulars'> 
          <NavDropdown.Item href="#">circulars& notifications</NavDropdown.Item>
          </LinkContainer>
       <LinkContainer to='/certificated'>
       <NavDropdown.Item href="#">certificate Issued</NavDropdown.Item>
       </LinkContainer>
       
       
        
      </NavDropdown>
      <NavDropdown title="Examination " id="basic-nav-dropdown">
         <LinkContainer to='/Examination gudiline'>
         <NavDropdown.Item href="#">Examination gudline</NavDropdown.Item>
         </LinkContainer>
         <LinkContainer to='/Examination Application'>
         <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
         </LinkContainer>
       
       
        <LinkContainer to='/result/loginpage'>
        <NavDropdown.Item href="#">Results</NavDropdown.Item>
        </LinkContainer>
        
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