import * as React from 'react'



import {
    container,
    heading, main,

    heroSection
} from "../styles/layout.module.css"



import Hero from './hero';
import Menu from "./menu";
import Bio from "./bio";
import Projects from "./projects";
import Contact from "./contact";
import { Container } from "react-bootstrap";
import Scroll from "./scroll";






const Layout = ({ pageTitle, children }) => {
    return (


        <Container fluid className={main}>


            <Hero pageTitle={pageTitle} >
                <title>{pageTitle}</title>

                <Menu />

            </Hero>



            <Bio idProp="bio" />


            <Projects idProp="projects" />






            <Contact idProp="contact" />

            <Scroll />
        </Container>




    )
}

export default Layout;