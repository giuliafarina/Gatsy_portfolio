import * as React from 'react'
import { Container, Image } from 'react-bootstrap';
import { container, photoHero } from './layout.module.css';
import photoCV from "../images/FOTOCV 1.png"



const Me = ({ idProp }) => {
    return (
        <Container className={container}> <Image src={photoCV} className={photoHero} /><p id={idProp}>

            Hi! I'm Giulia. I am a front-end developer with a flair for design.<br />





        </p></Container>


    )
}

export default Me;