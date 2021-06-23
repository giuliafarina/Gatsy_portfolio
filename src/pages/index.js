

// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby";
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome">

        <h1>Hi! I'm Giulia</h1>
        <h2>Cucu</h2>

      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage


