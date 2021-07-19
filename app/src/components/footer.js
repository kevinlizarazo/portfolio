import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  letter-spacing: +1px;
  font-weight: 700;
`

const StyledLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: black;
`

const Footer = () => (
  <StyledFooter>
    <Link to="/" aria-label="home">
      <StyledLogo className='logo'>kl</StyledLogo>
    </Link>
  </StyledFooter>
)

export default Footer