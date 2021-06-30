import * as React from "react";
import { Container } from "react-bootstrap";
import { container_bio } from "./layout.module.css";

const Bio = ({ idProp }) => {
    return (
        <Container className={container_bio} id={idProp}>
            <p> My name is Giulia and I work as a freelance front-end developer.
            I love the whole process of creating web and mobile app, from designing to developing.
         
            

        </p>

        </Container>

    )
}




export default Bio;