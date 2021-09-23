import * as React from "react";
import { Container } from "react-bootstrap";
import { container_projects } from "../styles/layout.module.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import * as styles from "../styles/projects.module.css";
import destino from "../images/destino.png";
import stanze from "../images/stanze.png";
import heinemann from "../images/heinemann.png";


const Projects = ({ idProp }) => {
    return (
        <>
            <div className={styles.wrapper_dark} id={idProp}>
                <h1 className={styles.title}><b>Recent works</b></h1><br />


                <div className={styles.container_projects} >

                    <div className={styles.container_content}>
                        <h2 className={styles.title_projects}>Destino Coaching</h2>

                        <div className={styles.container_image}>
                            <a href="https://www.destinocoaching.co.uk/">
                                <img className={styles.destino_image} src={destino} />
                            </a>
                        </div>
                        <div className={styles.description}>
                            <p>A website for a small Coaching-Services business.</p>
                            <p>Responsabilities: coding.</p>
                            <p>Technologies: React.JS, Gatsby.JS.</p>
                        </div>
                    </div>
                    <div className={styles.container_content}>
                        <h2 className={styles.title_projects}>Reinhardt Heinemann</h2>

                        <div className={styles.container_image}>
                            <img className={styles.destino_image} src={heinemann} />
                        </div>
                        <div className={styles.description}>
                            <p>Re-design for an online catalog of Reinhardt Heinemann's paintings.</p>
                            <p>Responsabilities: UX/UI, coding.</p>
                            <p>Technologies: React.JS, Bootstrap.</p>
                        </div>
                    </div>

                </div>
                <div className={styles.container_projects} >
                    <div className={styles.container_content}>
                        <h2 className={styles.title_projects}>Teatro delle Stanze</h2>
                        <div className={styles.container_image}>
                            <img className={styles.stanze_image} src={stanze} /></div>
                        <div className={styles.description}>
                            <p>A website for an italian theatre company.</p>
                            <p>Responsabilities: UX/UI, coding.</p>
                            <p>Technologies: Node.JS, Express, Bootstrap.</p></div>
                    </div>
                    <div className={styles.container_content}>


                        <h2 className={styles.title_projects}>Riddles</h2>
                        <p>...Nothing yet?</p><br />
                        <div className={styles.description}>
                            <p>On July 20, 1969, two American astronauts,</p>
                            <p>Neil Armstrong
                                and Edwin "Buzz" Aldrin,
                                became the first humans ever to land on the moon.</p>
                            <p>Give me a little bit of time.</p>


                        </div>
                        <div className={styles.container_image}>
                            <div class={styles.wrapper}>
                                <div class={styles.planet}></div>
                                <div class={styles.moon}></div>
                            </div>

                        </div>

                    </div>
                </div>





            </div>
        </>
    )


}

export default Projects;