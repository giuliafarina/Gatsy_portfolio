import * as React from "react";
import { useState } from "react";
import * as styles from "../styles/layout.module.css";
import { AnchorLink } from 'gatsby-plugin-anchor-links';







const Menu = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    function handleClick() {
        setMobileNavOpen(prev => !prev);


    }
    return <><div className={mobileNavOpen ? styles.wrapper_active : styles.wrapper}>

        <nav className={styles.navBar}>
            <div className={styles.burger}>
                <button className={styles.button_toggle_menu} onClick={handleClick}>
                    <span className={styles.line1} />
                    <span className={styles.line2} />
                    <span className={styles.line3} />
                </button>
            </div>
            <ul className={mobileNavOpen ? styles.nav_links_active : styles.nav_links}>
                <li className={styles.navLinkItem}><AnchorLink className={styles.navLinkText} to="/#bio">About</AnchorLink></li>
                <li className={styles.navLinkItem}><AnchorLink className={styles.navLinkText} to="/#projects">Projects</AnchorLink></li>
                <li className={styles.navLinkItem}><AnchorLink className={styles.navLinkText} to="/#contact">Contacts</AnchorLink></li>
            </ul>
        </nav></div></>
}




export default Menu;