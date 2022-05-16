import React from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import { Grid, Box, Paper } from "@material-ui/core";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact/ContactForm";
import style from "../styles/Home.module.css";
import Image from "next/image";
import Pic from "../public/pic.png";


export default function AutoGrid() {
  return (
    <div>
       <Head>
        <title>Beyin</title>
        <meta name="description" content="Beyin Digital Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Box>
      <Navbar />
      <Container>
        <Grid container className={style.grid}>
          <div className={style.img}>
            <Image src={Pic} alt="Image Beyin" />
          </div>
          <Grid className={style.grid}>
           <Paper>
           <ContactForm />
           </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
}
