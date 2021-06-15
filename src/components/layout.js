import * as React from 'react'
import { Link } from 'gatsby'
import { navBar } from "./layout.module.css";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav className={navBar}>
                <ul className={navLinks}>
                    <li className={navLinkItem}> <Link to="/">Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>

                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout;