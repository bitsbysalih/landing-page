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
    border: "2px solid rgba(227, 227, 227, 0.8)",
  },
  boxx: {
    textAlign: "left",
    margin: "4rem 2rem",
    width: "90%",
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
    borderRadius: "22px",
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={4} style={{ width: "20%" }}>
          {/* <Image src={Iphone} width="400%"  alt="Beyin Image"/> */}
        </Grid>
        <Grid item xs={6} sm={12} md={6} lg={7}>
          <Box className={classes.boxx}>
            <Typography variant="h4" className={classes.typo}>
              Be the market leader
            </Typography>
            <Typography
              component="div"
              variant=""
              style={{ margin: "2rem 1px" }}
            >
              Stay ahead of the curve; upgrading to EBC will boost your business{" "}
              <br /> reputation and sales, especially with high profile clients.
            </Typography>
            <StyleButton />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
