import React from 'react';
import styled from 'styled-components'
import SEO from "./seo"
import GlobalStyle from './style/globalStyle'
import Header from './header'
import Footer from './footer'

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
`

const Layout = ({ hiddenLogo, children }) => {

  return (
    <StyledLayout>
      <SEO title="Kevin Lizarazo" keywords={[`portfolio`, `web developer`, `gatsby`, `react`]} />
      <GlobalStyle />
      <Header hiddenLogo={hiddenLogo}/>
      <main id="main-content">{children}</main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout