

// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby";
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from '../components/me';
import Contact from "../components/contact";
import Hero from '../components/hero';


// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome">



      </Layout>


      <Contact idProp="contact" />
    </main>
  )
}

// Step 3: Export your component
export default IndexPage


