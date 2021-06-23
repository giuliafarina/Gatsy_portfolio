import * as React from "react";

import { Link } from 'gatsby'
import { navBar } from "./layout.module.css";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    heroImage
} from './layout.module.css'
import { AnchorLink } from 'gatsby-plugin-anchor-links';



const Hero = ({ children }) => {
    return (
        <div className={heroImage}>
            {children}
        </div>


    )

}

export default Hero;


