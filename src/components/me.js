import * as React from 'react'
import * as styles from "../styles/hero.module.css";



const Me = ({ idProp }) => {
    return (
        <div className={styles.container_content_hero}>
            <p className={styles.content} id={idProp}>
                <h2>Hello, I'm</h2>
                <h1 className={styles.title}>GIULIA</h1> <br />
                <h3>I am a front-end developer.</h3><br />
            </p>
            <div className={styles.overlay}></div>
        </div>

    )
}

export default Me;