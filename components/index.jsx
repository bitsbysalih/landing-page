import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImageCard from "../public/card.png";
import ImageIphone from "../public/iPhone.png";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  box: { margin: "9rem 0rem", width: "100%", height: "100%" },
  typo: {
    fontFamily: "Poppins",
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
    <Box className={classes.box}>
      <Box style={{ margin: "3rem 0rem" }}>
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
        <Grid item xs={12} sm={8} md={4} lg={4}>
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
            <Box className={classes.imgCard}>
              <Image src={ImageCard} alt="Card" />
            </Box>
          </Grid>
        </Grid>
        {/* tow card */}
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          sm={12}
          md={7}
          lg={5}
        >
          <Grid xs={3} className={classes.imgIphone}>
            <Image src={ImageIphone} />
          </Grid>
          <Grid xs={7}>
            <Grid>
              <Grid container justifyContent="space-around">
                <Grid item xs={3}>
                  <Typography
                    style={{ fontSize: "4rem", margin: "-24px 30px" }}
                  >
                    2
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography component="div" variant="body1">
                    Click on start, then allow the camera to scan the card.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid style={{ margin: "2rem 2rem" }}>
              <Typography component="div">
                The website will recognize the card and show the Extended
                Business Card.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
