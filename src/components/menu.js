import * as React from "react";
import { useState } from "react";




import * as styles from "../styles/layout.module.css";
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import classNames from "classnames";





const Menu = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)


    function handleClick() {
        setMobileNavOpen(prev => !prev);


    }




    return <><div className={styles.wrapper}>

        <nav className={styles.navBar}>
            <div className={styles.burger}>
                <button className={styles.button_toggle_menu} onClick={handleClick}>{mobileNavOpen ? "Close" : "Open"}
                    <span className={styles.line1} />
                    <span className={styles.line2} />
                    <span className={styles.line3} />
                </button>


            </div>
            <ul className={`menuNav ${mobileNavOpen ? "showMenu" : ""}`} >
                <li className={styles.navLinkItem}><AnchorLink className={styles.navLinkText} to="/#bio">About</AnchorLink></li>
                <li className={styles.navLinkItem}><AnchorLink className={styles.navLinkText} to="/#projects">Projects</AnchorLink></li>
                <li className={styles.navLinkItem}><AnchorLink className={styles.navLinkText} to="/#contact">Contacts</AnchorLink></li>
            </ul>


        </nav></div></>
}
{/* // <Nav className="ml-auto justify-content-center">
    //     <Navbar bg="transparent" variant="dark" collapseOnSelect expand="lg" className={navBar + " justify-content-center"}>
    //         <div className={burger}>
    //             <Hamburger toggled={isOpen} toggle={setOpen} easing="ease-in" />
    //         </div>

    //         <Navbar.Collapse id="responsive-navbar navbarScroll" className={isOpen ? "show " : "" + "order-md-1"}>

    //             <Nav.Link className={navLinkItem}>
    //                 <AnchorLink to="/#bio" */}
{/* //                     className={navLinkText}>About</AnchorLink>
    //             </Nav.Link>
    //             <Nav.Link className={navLinkItem}>
    //                 <AnchorLink to="/#projects" className={navLinkText}>Projects</AnchorLink>
    //             </Nav.Link>
    //             <Nav.Link className={navLinkItem}><AnchorLink to="/#contact" className={navLinkText}>Contact</AnchorLink></Nav.Link>

    //         </Navbar.Collapse>
    //     </Navbar>
    // </Nav>
    // ) */


}

export default Menu;