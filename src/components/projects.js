import * as React from "react";
import { Container } from "react-bootstrap";
import { container_projects } from "./layout.module.css"

const Projects = ({ idProp }) => {
    return (
        <Container fluid className={container_projects} id={idProp}>
            <p>Have a look at my projects:
            </p>


        </Container>

    )


}

export default Projects;