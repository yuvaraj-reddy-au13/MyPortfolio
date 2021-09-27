import React from "react";
import { Navbar,Container, Nav  } from 'react-bootstrap';

import './NavBar.css'

import { Link } from 'react-scroll'

import { Bounce } from 'react-reveal'



const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark" className='navBar-wrapper '>
                <Container>
                    <Navbar.Brand href="#home" className='navTitle'>Yuvaraj Reddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav white" variant='light'>
                        <Nav className="ms-auto ">
                           
                           
                            <Link to='home' ><Nav.Link className="m-3 navLink" href="#link" active='true' > <Bounce right> Home </Bounce></Nav.Link></Link>
                            <Link to='aboutme' ><Nav.Link className="m-3 navLink" href="#link" active='true'> <Bounce right> About Me </Bounce> </Nav.Link></Link>
                            <Link to='services' ><Nav.Link className="m-3 navLink" href="#link" active='true'> <Bounce right> services </Bounce></Nav.Link></Link>
                            <Link to='portfolio' ><Nav.Link className="m-3 navLink" href="#link" active='true'> <Bounce right> Portfolio </Bounce></Nav.Link></Link>
                            <Link to='contactme' ><Nav.Link className="m-3 navLink" href="#link" active='true'> <Bounce right>Contact Me  </Bounce> </Nav.Link></Link>

                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
