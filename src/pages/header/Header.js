import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/header/1375589.png';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, SignOutUser } = useFirebase();
    return (
        <>
         <Navbar bg="dark" variant="dark" expand='sm' sticky='top'>
            <Container>
            <Navbar.Brand href="#home"><Link to='/'><img src={logo} alt="" width='40'/></Link></Navbar.Brand>
            <NavbarToggle aria-controls='responsiveNav'/>
            <NavbarCollapse id='responsiveNav'>
            <Nav className="ms-auto">
                <Nav.Link as={HashLink} to="/#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/#userGuide">User Guide</Nav.Link>
                <Nav.Link as={HashLink} to="/#about">About</Nav.Link>
                {
                    user?.email &&
                    <Nav.Link onClick={SignOutUser}>Sign Out</Nav.Link>
                }

                {
                    !user?.email &&
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                }
                {
                    !user?.email &&
                    <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                }
            </Nav>
            </NavbarCollapse>
            </Container>
        </Navbar>   
        </>
    );
};

export default Header;