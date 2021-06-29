import * as React from 'react'



import {
    container,
    heading,

    heroSection
} from './layout.module.css'


import Hero from './hero';
import Menu from "./menu";





const Layout = ({ pageTitle, children }) => {
    return (
        <div>

            <div className={heroSection}>

                <main className={container}>
                    <Hero pageTitle={pageTitle} >
                        <title>{pageTitle}</title>
                        <Menu />

                        <h1 className={heading}>{pageTitle}</h1>
                    </Hero>


                </main>


            </div>
        </div>

    )
}

export default Layout;