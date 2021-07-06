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





const Menu = ({ children }) => {
    return (

        <Navbar bg="transparent" variant="dark" collapseOnSelect expand="lg" className={navBar}>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <ul className={navLinks}>


                        <li className={navLinkItem}>
                            <AnchorLink to="/#bio"
                                className={navLinkText}>About</AnchorLink>
                        </li>
                        <li className={navLinkItem}>
                            <AnchorLink to="/#projects" className={navLinkText}>Projects</AnchorLink>
                        </li>
                        <li className={navLinkItem}><AnchorLink to="/#contact" className={navLinkText}>Contact</AnchorLink></li>
                    </ul>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
};

export default Menu;