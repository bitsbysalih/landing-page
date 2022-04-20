import React from 'react'
import Container from "@material-ui/core/Container";
import Header from './Navbar'
import Hero from './Hero'
import Ads from './Ads'
import Work from './index'
import Beyin from './Beyin'
import Card from './Card'
import Prices from './Prices'
import Footer from './Footer'
import Works from './Works'

function Layout() {
  return (
    <div style={{ border:'1px solid'}}>
              <Header />
              <Container minWidth="xs" maxWidth="lg">
                <Hero />
                <Ads />
                <Work />
                <Beyin />
                <Card />
                <Prices />
                <Works />
                <Footer />
                </Container>
    </div>
  )
}

export default Layout