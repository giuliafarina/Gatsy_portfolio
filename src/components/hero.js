import * as React from "react";

import { Link } from 'gatsby'
import { navBar } from "./layout.module.css";
import {

    heroImage, heroSection
} from './layout.module.css'
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Container } from "react-bootstrap";
import Me from "./me";



const Hero = ({ children }) => {
    return (
        <Container className={heroSection}>
            {children} <Me />
        </Container>


    )

}

export default Hero;


