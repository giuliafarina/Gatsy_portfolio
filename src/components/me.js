import * as React from 'react'
import { Container, Image } from 'react-bootstrap';
import { container, photoHero } from './layout.module.css';
import photoCV from "../images/photoCVbw.png"



const Me = ({ idProp }) => {
    return (
        <div>
            <Image src={photoCV} className={photoHero} fluid /><p id={idProp}>

                <h2>Hi! I'm Giulia.</h2> <br />I am a front-end developer with a flair for design.<br />





            </p>
        </div>

    )
}

export default Me;