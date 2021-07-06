import * as React from "react";


import {

    heroSection
} from './layout.module.css'

import { Container } from "react-bootstrap";
import Me from "./me";



const Hero = ({ children }) => {
    return (
        <Container fluid className={heroSection}>
            {children} <Me />
        </Container>


    )

}

export default Hero;


