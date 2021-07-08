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
        <Nav className="ml-auto justify-content-center">
            <Navbar bg="transparent" variant="dark" collapseOnSelect expand="lg" className={navBar + " justify-content-center"}>

                <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll" />
                <Navbar.Collapse id="responsive-navbar navbarScroll" className="order-md-1">




                    <Nav.Link className={navLinkItem}>
                        <AnchorLink to="/#bio"
                            className={navLinkText}>About</AnchorLink>
                    </Nav.Link>
                    <Nav.Link className={navLinkItem}>
                        <AnchorLink to="/#projects" className={navLinkText}>Projects</AnchorLink>
                    </Nav.Link>
                    <Nav.Link className={navLinkItem}><AnchorLink to="/#contact" className={navLinkText}>Contact</AnchorLink></Nav.Link>



                </Navbar.Collapse>
            </Navbar>
        </Nav>
    )
};

export default Menu;