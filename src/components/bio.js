import * as React from "react";

import * as styles from "../styles/bio.module.css";
import giuliaRose from "../images/giuliaRose.png"

const Bio = ({ idProp }) => {
    return (
        <div className={styles.container_bio} id={idProp}>
            <div className={styles.container_content}><h1 className={styles.title}><b>About me</b></h1>
                <p>My name is Giulia Farina, and I'm a self-taught Front End Developer from Italy, currently based in Copenhagen.</p>
                <p>I build websites and love it.</p><br />
                <p>My journey as a developer started while I was completing a PhD in Latin. The necessity of finding smart and fast ways to deal with ancient texts gave me the chance to experiment with modern technologies, combining my passions.</p>

                <p>I like to think that my unique background gives me an original perspective on programming and design, as well as an unstoppable curiosity.</p>
                <p>(And I can translate Cicero and Aristoteles, isn't that cool?).</p><br />
                <p>When I am not coding, I love to knit, to practice yoga, and above all, to sleep (if you are laughing at this point I know you are a parent of a little one, too).</p>






            </div>
            {/* <div className={styles.container_image}>
                <img className={styles.giuliaRose_image} src={giuliaRose} />
            </div> */}







            {/* <h3 className={intro}>I enjoy designing and building beautiful applications</h3><br />
            <h4>The technologies I use the most are:</h4>
            <label className={label}>React.js</label><label className={label}>Node.js</label><label className={label}>Express</label><label className={label}>HTML</label><label className={label}>Javascript</label><label className={label}>CSS</label><br /><label className={label}>Bootstrap</label><label className={label}>Gatsby.js</label><label className={label}>Balsamiq</label><label className={label}>Figma</label><br />
            {/* <h4>About me</h4>
            <p className={bio_paragraph}>I was born in a small town in <b>Tuscany</b>, Italy (yes, that means <b>WINE</b> )and now I live in <b>Copenhagen</b> with my husband and daughter.

            </p> */}







        </div>

    )
}




export default Bio;