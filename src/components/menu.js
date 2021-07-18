import * as React from "react";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";


import {
    burger,
    navBar,
    navLinkItem,
    navLinkText
} from "../styles/layout.module.css";
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Hamburger from 'hamburger-react';





const Menu = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <Nav className="ml-auto justify-content-center">
            <Navbar bg="transparent" variant="dark" collapseOnSelect expand="lg" className={navBar + " justify-content-center"}>
                <div className={burger}>
                    <Hamburger toggled={isOpen} toggle={setOpen} easing="ease-in" />
                </div>

                <Navbar.Collapse id="responsive-navbar navbarScroll" className={isOpen ? "show " : "" + "order-md-1"}>

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