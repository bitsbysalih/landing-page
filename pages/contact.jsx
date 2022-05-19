import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { Grid, Box, Paper } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact/ContactForm";
import style from "../styles/Home.module.css";
import Image from "next/image";
import Logo from "../public/logowhite.png";
import bgImage from "../public/contect.png";
import beyinLogo from "../components/logo/Logo";

export default function AutoGrid() {
  // const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Beyin</title>
        <meta name="description" content="Beyin Digital Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Navbar />
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={6} lg={6} className={style.bgImage}>
            {/* <Image src={Logo} alt="aa" /> */}

            <Image
              src={bgImage}
              alt="Beyin image"
              objectFit="cover"
              quality={90}
            />
          </Grid>
          <Grid item xs={6} lg={6}>
            <div className={style.form}>
              <ContactForm />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
