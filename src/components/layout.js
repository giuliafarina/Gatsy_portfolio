import * as React from 'react'



import {
    container,
    heading, main,

    heroSection
} from './layout.module.css'


import Hero from './hero';
import Menu from "./menu";
import Bio from "./bio";
import Contact from "./contact";
import { Container } from "react-bootstrap";
import Scroll from "./scroll";






const Layout = ({ pageTitle, children }) => {
    return (


        <Container fluid className={main}>

            <Container fluid className={container}>
                <Hero pageTitle={pageTitle} >
                    <title>{pageTitle}</title>
                    <Menu />

                    <h1 className={heading}>{pageTitle}</h1>
                </Hero>

            </Container>
            <Container fluid className={container}>
                <Bio idProp="bio" />
            </Container>





            <Container fluid className={container}><Contact idProp="contact" /></Container>

            <Scroll />
        </Container>




    )
}

export default Layout;