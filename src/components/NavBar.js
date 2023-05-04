import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/CSU-logo.png';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '#' },
    { name: 'Team Info', path: '/team-info' }
];

function NavBar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="md"
            bg="dark"
            variant="dark"
            fixed="top"
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand>
                    <RouterLink to="/" onClick={() => setExpanded(false)}>
                        <img src={logo} alt="CSU Logo" height="40" />
                    </RouterLink>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {navItems.map((item) => (
                            <Nav.Link
                                as={RouterLink}
                                key={item.name}
                                to={item.path}
                                onClick={() => setExpanded(false)}
                            >
                                {item.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
