import * as React from 'react'



import {
    container,
    heading,

    heroSection
} from './layout.module.css'


import Hero from './hero';
import Menu from "./menu";
import Bio from "./bio";
import Contact from "./contact";
import { Container } from "react-bootstrap";






const Layout = ({ pageTitle, children }) => {
    return (


        <main>

            <Container className={container}>
                <Hero pageTitle={pageTitle} >
                    <title>{pageTitle}</title>
                    <Menu />

                    <h1 className={heading}>{pageTitle}</h1>
                </Hero>

            </Container>
            <Container>
                <Bio idProp="bio" />
            </Container>





            <Container><Contact idProp="contact" /></Container>


        </main>




    )
}

export default Layout;