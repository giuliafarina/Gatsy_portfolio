import * as React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'gatsby'
import {
    container,
    navBar, navLinks,
    navLinkItem,
    navLinkText
} from "./layout.module.css";
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Logo } from "../images/Logo.svg"

import Bio from "./bio";
import Contact from "./contact";


const Menu = ({ children }) => {
    return (
        <Container className={container}>
            <Navbar collapseOnSelect expand="lg" className={navBar}>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <ul className={navLinks}>
                            <li><img
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"

                            /></li>
                            <li className={navLinkItem}>
                                <Link to="/" className={navLinkText}>Home</Link>
                            </li>
                            <li className={navLinkItem}>
                                <AnchorLink to="/#bio"
                                    className={navLinkText}>About</AnchorLink>
                            </li>
                            <li className={navLinkItem}><AnchorLink to="/#contact" className={navLinkText}>Contact</AnchorLink></li>
                        </ul>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Container>)
};

export default Menu;