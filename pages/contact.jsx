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
      <Container>
        <Grid container className={style.grid}>
          <div className={style.img}>
            <Image src={Pic} />
          </div>
          <Grid className={style.grid}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
