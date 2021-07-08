import * as React from "react";
import { Container } from "react-bootstrap";
import { container_projects } from "./layout.module.css"
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects = ({ idProp }) => {
    return (
        <Container fluid className={container_projects} id={idProp}>
            <p>Have a look at my projects:
            </p><br />
            <a href="https://github.com/giuliafarina"><GitHubIcon /> giuliafarina</a>


        </Container>

    )


}

export default Projects;