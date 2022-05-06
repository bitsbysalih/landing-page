import * as React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import StyleButton from "./Button/StyleButton";

const useStyles = makeStyles(() => ({
  box: {
    margin: "5rem 1rem 10rem",
    borderRadius: "30px",
  },
  boxx: {
    textAlign: "left",
    margin: "4rem 2rem",
    width: "100%",
    maxHeight: "100%",
  },
  typo: {
    marginTop: "2rem",
    fontFamily: "Poppins",
    fontWeight: 300,
    lineHeight: "54px",
    fontSize: "36px",
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
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Box className={classes.box} id="hero">
      <Grid
        container
        spacing={9}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={7} sm={12} md={6} lg={7}>
          <Box className={classes.boxx}>
            <Typography variant="h4" className={classes.typo}>
              Get the most effective business <br />
              card ever for only 1$/month
            </Typography>
            <Typography
              component="div"
              variant="p"
              style={{ margin: "2rem 1px" }}
            >
              Extended Business Card Platform allows you to create extended
              business cards for you, your company, or clients in no time and
              without complex steps for as low as $1 per month!
            </Typography>
            {/* button */}
            <StyleButton />
          </Box>
        </Grid>
        {/* video */}
        <Grid item>
          <Box style={{ height: "420px", maxWidth: "100%" }}>
            <video
              controls
              autostart="true"
              autoPlay
              src="./video.mp4"
              type="video/mp4"
              alt="Beyin Video"
              className={classes.video}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
