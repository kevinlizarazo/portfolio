import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 3.25rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  background: white;
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
`

const StyledLogo = styled.div`
  font-size: 1.25rem;
  font-weight: 900;
  color: black;
`

const StyledNav = styled.div`
  font-weight: 900;
  color: black;
  text-align: right;
  &:hover,
  &:focus {
    outline: 0;
    color: #f25d27;
  }
`

const Header = ({ hiddenLogo }) => {
  if (hiddenLogo === 'hidden') return (<StyledHeader></StyledHeader>);
  else {
    return (
      <StyledHeader>
        <Link to="/" aria-label="home">
          <StyledLogo className='logo'>kevin lizarazo</StyledLogo>
        </Link>
        <Link to="/" aria-label="home">
          <StyledNav>home</StyledNav>
        </Link>
      </StyledHeader>
    )
  }
}

export default Header