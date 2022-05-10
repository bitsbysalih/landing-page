import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Vector from "../public/vector1.png";
import Vectoor from "../public/vector2.png";
import Flat from "../public/flat.png";


const useStyles = makeStyles((theme) => ({
  div: {
    padding: "1rem",
    maxWidth: "90%",
    textAlign: "center",

    flexGrow: 1,
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
  },
  box: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    width: "90%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typo: {
    textAlign: "left",
    padding: "6px 29px",

  },
  img: {
    height: "156px",
    width: "156px",
  },
  grid: {
    margin: "1.5rem auto",
  },
}));

export default function Beyin() {
  const classes = useStyles();

  return (

    <div style={{ margin: "4rem 0rem" }} id="features">
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          {/* card one */}
          <div className={classes.div}>
            <Grid xs={12} container spacing={2}>
              <Grid
                container
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={classes.grid}
              >
                {/* card one one */}
                <Box className={classes.box}>
                  <Image
                    className={classes.img1}
                    alt="icon heart"
                    src={Vectoor}
                  />
                </Box>
                <Grid xs={8} sm={7} md={7} lg={8}>
                  <Grid item container>
                    <Grid item>
                      <Typography variant="h5" className={classes.typo}>
                        it keeps a lasting impression every time
                      </Typography>
                      <Typography variant="body2" className={classes.typo}>
                        Be memorable! leave a card that can be experienced again
                        and again long after you’re gone.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
                {/* card two  */}
              <Grid container xs={12} className={classes.grid}>
                <Box className={classes.box}>
                  <Image
                    className={classes.img1}
                    alt="icon infinite"
                    src={Vector}
                  />
                </Box>
                <Grid xs={8} sm={7} md={7} lg={8}>
                  <Grid item xs container spacing={2}>
                    <Grid item>
                      <Typography variant="h5" className={classes.typo}>
                        Unlimited copies and views
                      </Typography>
                      <Typography variant="body2" className={classes.typo}>
                        Distribute as many copies as you need, no strings
                        attached!
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <div className={classes.div}>
            <Grid xs={12} container spacing={2}>
              <Grid
                 container
                 xs={12}
                 sm={12}
                 md={12}
                 lg={12}
                 className={classes.grid}
              >
                <Box className={classes.box1}>
                  <Image className={classes.img1} alt="icon heart" src={Flat} />
                </Box>
              </Grid>
              <Grid item container className={classes.grid}>
                <Grid item xs={12} sm={8} md={10} lg={10} container>
                  <Grid item xs container spacing={2}>
                    <Grid item>
                      <Typography variant="h5" className={classes.typo}>
                        Works on all Smart devices
                      </Typography>
                      <Typography variant="body2" className={classes.typo}>
                        The EBC card works on all popular smart devices like
                        Android and IOS as long as it can run Chrome, Edge or
                        Safari.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
