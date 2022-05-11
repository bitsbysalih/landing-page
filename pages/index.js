
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from "../components/Navbar";
import Hero from "../components/Hero";
import Ads from "../components/Ads";
import Container from "@material-ui/core/Container";
import Work from "../components/index";
import Beyin from "../components/Beyin";
import Card from "../components/Card";
import Prices from "../components/Prices";
import Works from "../components/Works";
import Footer from "../components/Footer";
export default function Home() {

  return (

     <div className={styles.container}>
       <Head>
         <title>Beyin</title>
         <meta name="description" content="Beyin Digital Technology" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
        <main>
          <Header />
          <Container>
          <Hero />
          <Ads />
          <Work />
          <Beyin />
          <Card />
          <Prices />
          <Works />
          <Footer />
          </Container>
        </main>


     </div>

  )
}
