import * as React from "react";
import * as styles from "../styles/hamburger.module.css";

const Hamburger = () => {
    return <>

        <div className={styles.burger}>
            <span className={styles.line1} />
            <span className={styles.line2} />
            <span className={styles.line3} />

        </div>


    </>
}

export default Hamburger;