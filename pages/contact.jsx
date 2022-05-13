import React from "react";
import Container from "@material-ui/core/Container";
import { Grid, Box } from "@material-ui/core";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact/ContactForm";
import style from "../styles/Home.module.css";

export default function AutoGrid() {

  return (
    <Box>
      <Navbar />
      <Container>
      <Grid container sm={12} md={12} lg={12}>
        <Grid item xs={1} sm={0} md={6} lg={6}
        className={style.contact}>
        </Grid>
        <ContactForm />
      </Grid>
      </Container>
    </Box>
  );
}

// npm i emailjs-com
// npm i react-hook-form axios nodemailer