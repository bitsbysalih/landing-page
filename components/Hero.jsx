import * as React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import StyleButton from "./Button/StyleButton";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "5rem",
    borderRadius: "30px",
  },
  boxx: {
    textAlign: "left",
    margin: "2rem auto",
  },
  typo: {
    marginTop: "2rem",
    fontFamily: "Poppins",
    fontWeight: 300,
    lineHeight: "54px",
    fontSize: "36px",
    width: "100%",
  },
  button: {
    marginLeft: "1",
    border: "1px solid gray",
    borderRadius: "23rem",
  },
  video: {
    maxWidth: "100%",
    height: "100%",
    borderRadius: "30px",
    boxShadow: "0 134px 148px -76px rgba(0, 0, 0, 0.3)",
  },
   link: {
    fontFamily: "Poppins",
    textDecoration: "none",
    color: "#58696D",
    fontSize: "21px",

  },
}));

export default function Hero() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xs"));

  return (
    <div id="hero" className={classes.box}>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item sm={7} md={6} lg={7}>
          <div className={classes.boxx}>
            <Typography variant="h4" className={classes.typo}>
              Get the most effective business <br />
              card ever for only 1$/month
            </Typography>
            <Typography
              component="div"
              variant="body1"
              style={{ margin: "2rem 1px"}}>
              Extended Business Card Platform allows you to create extended
              business cards for you, your company, or clients in no time and
              without complex steps for as low as $1 per month!
            </Typography>
            {/* button */}
          <Link href="/contact">
          <a className={classes.link}>
          <StyleButton />
          </a>
          </Link>
          </div>
        </Grid>
        {/* video */}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sm={5}
          md={4}
          lg={3}
        >
          <Grid style={{ height: "420px", maxWidth: "100%" }}>
            <video
              controls
              autostart="true"
              autoPlay
              src="./video.mp4"
              type="video/mp4"
              alt="Beyin Video"
              className={classes.video}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
