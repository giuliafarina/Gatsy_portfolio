import * as React from "react";
import { Container } from "react-bootstrap";
import { container_bio } from "./layout.module.css";

const Bio = ({ idProp }) => {
    return (
        <Container fluid className={container_bio} id={idProp}>


            <p>
                I currently work as a freelance <strong><h4>Front-End developer</h4></strong>.
                </p><br />
            <p>I enjoy designing and building beautiful applications, with a keen eye on <b>responsivness</b>.</p><br />
            <p>The technologies I use the most are:</p>
            <label>React.js</label><label>Node.js</label><label>Express</label><label>HTML</label><label>Javascript</label><label>CSS</label><br /><label>Bootstrap</label><label>Gatsby</label><label>Balsamiq</label><label>Figma</label><br />

            <p>I was born in a small town in <b>Tuscany</b>, Italy (yes, that means <b>WINE</b> )and now I live in <b>Copenhagen</b> with my husband and daughter.
                 While completing a PhD in Classics, I discovered a passion for <b>programming</b> and <b>design</b>.

            </p>







        </Container>

    )
}




export default Bio;