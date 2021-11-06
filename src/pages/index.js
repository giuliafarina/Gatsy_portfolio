
import * as React from 'react';
import { Helmet } from "react-helmet"
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import favicon from "../images/favicon.svg";



const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Giulia Farina" />
        <meta name="description" content="Giulia Farina- Frontend Developer" />
        <meta property="og:title" content="Giulia Farina- Frontend Developer" />
        <meta property="og:description" content="Hi! I'm Giulia, a freelance frontend developer based in Copenhagen." />
        <meta property="og:site_name" content="www.giuliafarina.com" />
        <link rel="icon" type="image/svg+xml" href={favicon} />
        <title>Giulia Farina | Frontend Developer</title>
      </Helmet>
      <Layout />
    </React.Fragment>
  )
}


export default IndexPage


