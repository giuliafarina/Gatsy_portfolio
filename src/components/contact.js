import * as React from "react";
import { Container } from "react-bootstrap";
import { container_contact } from "./layout.module.css";

const Contact = ({ idProp }) => {
    return (
        <Container className={container_contact}>
            <footer id={idProp}>Let's work together!</footer>

        </Container>

    )

}

export default Contact;
