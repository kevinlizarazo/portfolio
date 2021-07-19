import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"

const IndexPage = ({ data }) => (
  <Layout hiddenLogo='hidden'>
    <SEO title="Kevin Lizarazo" keywords={[`portfolio`, `web developer`, `gatsby`, `react`]} />
      <Hero content={data.bio.edges[0].node} />
      <Projects data={data.projects.edges} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    bio: allMdx(filter: {fileAbsolutePath: {regex: "/bio/"}}) {
      edges {
        node {
          body
        }
      }
    }
    projects: allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
      edges {
        node {
          frontmatter {
            slug
            title
            subtitle
            date
          }
        }
      }
    }
  }
`
