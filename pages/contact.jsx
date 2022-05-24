
import Head from "next/head";
import Grid from "@material-ui/core/Grid"
import {  makeStyles, createStyles } from "@material-ui/core";
import Side from "../components/contact/Side";
import Form from "../components/contact/ContactForm";
import Nav from "../components/contact/Nav";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      position: "fixed",
    },
    bgImage: {
      height: "100vh",
      "@media only screen and (max-width: 640px)": {
        display: "none",
      },
    },
    form: {
      // position: 'relative',
      "@media only screen and (max-width: 1440px)": {
        margin: "3rem auto",
      },
    },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Beyin Contact</title>
        <meta name="description" content="Beyin Digital Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Nav />

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.box}
        >
          <Grid item xs={6} className={classes.bgImage}>
            <Side />
          </Grid>

          <Grid item sm={6} className={classes.form}>
            <Form />
          </Grid>
        </Grid>
      </>
    </>
  );
}
