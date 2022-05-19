import React from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import { Grid, Box, Paper, makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact/ContactForm";
import style from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../public/logowhite.png";

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
        <Grid style={{ display: "flex", width: "100%" }}>
          <Grid className={style.div}>
            <div className={style.logo}>
              <Image src={Logo} alt="Beyin Image" />
            </div>
          </Grid>
          <div className={style.form}>
            <Container>
              <ContactForm />
            </Container>
          </div>
        </Grid>
      </Box>
    </div>
  );
}
