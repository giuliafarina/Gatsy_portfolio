import * as React from "react";
import { Container } from "react-bootstrap";
import { container_bio, bio_paragraph, intro, label } from "./layout.module.css";

const Bio = ({ idProp }) => {
    return (
        <Container fluid className={container_bio} id={idProp}>


            <h3 className={intro}>I enjoy designing and building beautiful applications</h3><br />
            <h4>The technologies I use the most are:</h4>
            <label className={label}>React.js</label><label className={label}>Node.js</label><label className={label}>Express</label><label className={label}>HTML</label><label className={label}>Javascript</label><label className={label}>CSS</label><br /><label className={label}>Bootstrap</label><label className={label}>Gatsby.js</label><label className={label}>Balsamiq</label><label className={label}>Figma</label><br />
            {/* <h4>About me</h4>
            <p className={bio_paragraph}>I was born in a small town in <b>Tuscany</b>, Italy (yes, that means <b>WINE</b> )and now I live in <b>Copenhagen</b> with my husband and daughter.

            </p> */}







        </Container>

    )
}




export default Bio;