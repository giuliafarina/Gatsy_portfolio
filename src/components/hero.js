import * as React from "react";

import * as styles from "../styles/hero.module.css"

import { Container } from "react-bootstrap";
import Me from "./me";



const Hero = ({ children }) => {
    return (
        <Container fluid className={styles.heroSection}>
            {children}
            <Me />
        </Container>


    )

}

export default Hero;


