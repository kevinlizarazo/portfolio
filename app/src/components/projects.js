import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledSection = styled.section`
  margin-top: 25px;
  .container a {
    color: black;
    &:hover {
      color: #f25d27;
    }
    @media (max-width: 420px) {
      width: 100%
    }
  }
  .info{
    border: 1px solid black;
    padding: 10px;
  }
`


const Projects = ({ data }) => {

  let cards = data.map((project) => {
    let { title, subtitle, slug, date } = project.node.frontmatter
    return (  
      <div key={slug} date={date} className="container">
        <Link to={slug}>
          <div>
            <p className='info'>{title}{subtitle? `: ${subtitle}`  : ''}</p>
          </div>
        </Link>
      </div>
    )
  })

  cards.sort((a, b) => {
    return new Date(b.props.date) - new Date(a.props.date)
  })

  return (
    <StyledSection id="card-list">
      {cards}
    </StyledSection>
  )
}

export default Projects
