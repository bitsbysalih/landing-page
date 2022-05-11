import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "../public/card.png";
import ImageIphone from "../public/iPhone.png";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  box: { margin: "9rem auto", alignItems: "center", },
  typo: {
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "40px",
    lineHeight: "54px",
    display: "flex",
    alignItems: "center",
  },
  imgIphone: {
    boxShadow: " 0px 67.6825px 87.2063px rgba(0, 0, 0, 0.01)",
    borderRadius: "19.5238px",
  },
  imgCard: {
    boxShadow: "0px 138px 189px -76px rgba(0, 0, 0, 0.03)",
    borderRadius: "5.25573px",
  },
  typo2: { fontSize: "70px", display: "flex" },
  gridCard: { marginLeft: "1rem" },
}));

export default function Work() {
  const classes = useStyles();
  return (
    <div className={classes.box} id="work">
      <Box style={{ margin: "3rem auto" }}>
        <Typography className={classes.typo}> How it works ?</Typography>
      </Box>
      {/* grid card all */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.gridCard}
      >
        {/* one card */}
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Grid>
            <Grid style={{ margin: "1rem 0rem" }}>
              {/* <Typography component="div" variant="h5">  </Typography> */}
              <Typography className={classes.typo2}>
                1
                <Typography
                  component="div"
                  variant="h6"
                  style={{ margin: " 1rem 5rem" }}
                >
                  Using your phone <br /> scan the QR code.
                </Typography>
              </Typography>
            </Grid>
            <div className={classes.imgCard}>
              <Image src={ImageCard} alt="Card" />
            </div>
          </Grid>
        </Grid>
        {/* tow card */}
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          sm={6}
          md={7}
          lg={5}
        >
          <Grid item xs={4} md={3} className={classes.imgIphone}>
            <Image src={ImageIphone} />
          </Grid>
          <Grid item xs={8} sm={7} md={4} lg={8}>
            <Grid item>
              <Grid container>
                <Grid item xs={4}>
                  <Typography
                    style={{ fontSize: "4rem", margin: "-22px 15px" }}

                  >
                    2
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={7}>
                  <Typography component="div" variant="body1" >
                    Click on start, then allow the camera to scan the card.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm={8}
              md={10}
              lg={10}
              style={{ margin: "2.5rem 1rem" }}
            >
              <Typography component="div">
                The website will recognize the card and show the Extended
                Business Card.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
