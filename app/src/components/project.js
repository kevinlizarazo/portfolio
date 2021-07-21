import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react";

import Layout from "./layout"

const components = {
  Link
};

const StyledProject = styled.section`
  border-top: 1px solid lightgrey;
`

const StyledMeta = styled.section`
  font-family: monospace;
  a {
    font-weight: bold;
  }
`

const StyledPost = styled.section`
  margin-top: 25px;
  line-height: 1.5rem;
  .spacer {
    margin-bottom: 50px !important;
  }
  a {
    font-weight: bold;
  }
  @media (max-width: 420px) {
    line-height: 1.75rem;
  }
`

const Project = ({ data }) => {
  const { frontmatter, body } = data.mdx

  return (
    <Layout className='project'>
      <StyledProject>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.subtitle}</h2>
        <StyledMeta>
          <p className='date'>{frontmatter.date}</p>
          <p className='tech'>{frontmatter.tech}</p>
          <p className='link'>{frontmatter.link? <a href={frontmatter.link} target="_blank" rel="noopener noreferrer">View the project here</a> : ''}</p>
        </StyledMeta>
        <StyledPost>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </StyledPost>
      </StyledProject>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query POST_BY_SLUG($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        subtitle
        tech
        date
        link
      }
    }
  }
`