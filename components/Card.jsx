import * as React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles  } from "@material-ui/core";
import StyleButton from "./Button/StyleButton";
import Image from "next/image";
import ImageCard from "../public/squircle.png";
import Link from "next/link";


const useStyles = makeStyles(() => ({
  box: {
    margin: "10rem 1rem 10rem",
  },
  boxx: {
    textAlign: "left",
    margin: "4rem 2rem",
    width: "90%",
    maxHeight: "100%",
  },
  typo: {
    marginTop: "1rem",
    fontFamily: "Poppins",
    fontWeight: 300,
    lineHeight: "54px",
    fontSize: "36px",
  },
  button: {
    marginLeft: "1",
    border: "1px solid gray",
    borderRadius: "22px",
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

  return (
    <div className={classes.box}>
      <Grid
      xs={12}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item  sm={4} md={6} lg={2}>
          <Image src={ImageCard} alt="Image Card" />
        </Grid>
        <Grid item  sm={6} md={6} lg={7}>
          <div className={classes.boxx}>
            <Typography variant="h4" className={classes.typo}>
              Be the market leader
            </Typography>
            <Typography component="div" style={{ margin: "2rem 1px" }}>
              Stay ahead of the curve; upgrading to EBC will boost your business{" "}
              <br /> reputation and sales, especially with high profile clients.
            </Typography>

          </div>
          <div>
          <Link href="/contact">
          <a className={classes.link}>
          <StyleButton />
          </a>
          </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
