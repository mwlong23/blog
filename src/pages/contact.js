import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutModules from "../components/about-css-modules"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Me</h1>
    <div />
    
    <Link to="/home/">Go Home</Link>
    <AboutModules />
  </Layout>
)

export default IndexPage
