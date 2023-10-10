import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../Images/pngegg.png';
import { useNavigate   } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


function Header() {

    const history = useNavigate();

    const logMeOut = () => {
        history('/')
    }
  return (
    <Navbar 
        collapseOnSelect
        bg='info'
        variant='dark'
        expand = 'md'
    >
        <Navbar.Brand>
            <img src={logo} alt='logo' width="50px"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto '>

                <LinkContainer to='/dashboard'>
                    <Nav.Link >Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/tickets'>
                    <Nav.Link >Tickets</Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header