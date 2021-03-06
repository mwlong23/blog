import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My New Gatsby Site</h1>
    <Link to="/contact/">Go to contact</Link>
  </Layout>
)

export default IndexPage
