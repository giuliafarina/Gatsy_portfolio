import * as React from "react";
import { Container } from "react-bootstrap";
import { container_bio, bio_paragraph } from "./layout.module.css";

const Bio = ({ idProp }) => {
    return (
        <Container fluid className={container_bio} id={idProp}>


            {/* <p>
                I currently work as a freelance <strong><h4>Front-End developer</h4></strong>.
                </p><br /> */}
            <h3>I enjoy designing and building beautiful applications, <br />with a keen eye on <b>responsiveness</b>.</h3><br />
            <p><h4>The technologies I use the most are:</h4></p>
            <label>React.js</label><label>Node.js</label><label>Express</label><label>HTML</label><label>Javascript</label><label>CSS</label><br /><label>Bootstrap</label><label>Gatsby.js</label><label>Balsamiq</label><label>Figma</label><br />
            {/* <h4>About me</h4>
            <p className={bio_paragraph}>I was born in a small town in <b>Tuscany</b>, Italy (yes, that means <b>WINE</b> )and now I live in <b>Copenhagen</b> with my husband and daughter.

            </p> */}







        </Container>

    )
}




export default Bio;