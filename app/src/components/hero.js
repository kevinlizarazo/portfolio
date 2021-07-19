import React from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

const StyledSection = styled.section`
  .highlighted {
    box-shadow: inset 0 -2.5rem #f1e740;
  }
`

const Hero = ({ content }) => {
  const { body } = content
  return (
    <StyledSection id="hero">
      <MDXRenderer>{body}</MDXRenderer>
    </StyledSection>
  )
}

export default Hero