import * as React from "react";

import * as styles from "../styles/contact.module.css";

import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";




const Contact = ({ idProp }) => {
    return (
        <div className={styles.wrapper_contact}>
            <h2 id={idProp}>I am available for freelance work.</h2>
            <br />
            <h4>Drop me a line if you're interested:</h4>
            <div className={styles.container_contact}>
                <p><a href="mailto:giuliafarina88@gmail.com">
                    <AiOutlineMail /> giuliafarina88@gmail.com</a></p>
                <p><AiOutlinePhone /> phone: +45 31 48 64 10</p>
            </div>
            <footer className={styles.social}>
                <a href="linkedin.com/in/giulia-farina-59300099"> <AiOutlineLinkedin /></a>
                <a href="https://github.com/giuliafarina"><AiOutlineGithub /></a>
                {/* <AiOutlineFacebook /><a href="mailto:giuliafarina88@gmail.com"></a>
                <AiOutlineInstagram /><a href="mailto:giuliafarina88@gmail.com"></a> */}
            </footer>

        </div>

    )

}

export default Contact;
