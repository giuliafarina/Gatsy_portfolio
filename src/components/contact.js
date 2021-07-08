import * as React from "react";
import { Container } from "react-bootstrap";
import { container_contact } from "./layout.module.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Contact = ({ idProp }) => {
    return (
        <Container fluid className={container_contact}>
            <h2 id={idProp}>I am available for freelance work.</h2> <br /><p>Drop me a line if you are interested:</p>
            <a href="mailto:giuliafarina88@gmail.com"> <MailOutlineIcon /> giuliafarina88@gmail.com</a>
        </Container>

    )

}

export default Contact;
