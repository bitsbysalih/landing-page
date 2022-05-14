import React from "react";
import Container from "@material-ui/core/Container";
import { Grid, Box, Paper } from "@material-ui/core";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact/ContactForm";
import style from "../styles/Home.module.css";
import Image from "next/image";
import Pic from "../public/pic.png";

export default function AutoGrid() {
  return (
    <Box>
      <Navbar />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid",
        }}
      >
        <Grid container direction="row" alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className={style.contact}></div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// npm i emailjs-com
// npm i react-hook-form axios nodemailer
