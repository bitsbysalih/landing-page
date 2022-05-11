import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Vector from "../public/vector1.png";
import Vectoor from "../public/Vector2.png";
import Flat from "../public/flat.png";

const useStyles = makeStyles((theme) => ({
  div: {
    padding: "1rem",
    maxWidth: "90%",
    textAlign: "center",
  },
  img: {
    display: "block",
    width: "80%",
    height: "100%",
  },
  box: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1px"
  },
  box1: {
    width: "60%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typo: {
    textAlign: "left",
    margin: "1rem 2rem",
  },
  img: {
    height: "156px",
    width: "156px",
  },
  grid: {
    margin: "2rem auto",
    width: "100%",
    height: "100%",
  },
}));

export default function Beyin() {
  const classes = useStyles();

  return (
    <div id="features">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        Align="center"
      >
        <Grid item sm={12} md={6} lg={6}>
          {/* card one */}
          <div className={classes.div}>
            <Grid container spacing={2}>
              <Grid container className={classes.grid}>
                {/* card one one */}
                <div className={classes.box}>
                  <Image
                    className={classes.img1}
                    alt="icon heart"
                    src={Vector}
                  />
                </div>
                <Grid item xs={8}>
                  <Grid container>
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
              <Grid container className={classes.grid}>
                <div className={classes.box}>
                  <Image
                    className={classes.img1}
                    alt="icon infinite"
                    src={Vectoor}
                  />
                </div>
                <Grid item xs={8}>
                  <Grid item xs container>
                    <Grid item>
                      <Typography variant="h5" className={classes.typo}>
                        Unlimited copies and <br /> views
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
        <Grid item sm={12} md={6} lg={6}>
          <div className={classes.div}>
            <Grid container spacing={2}>
              <Grid container className={classes.grid}>
                {/* <Box> */}
                <Grid className={classes.box1}>
                  <Image className={classes.img1} alt="icon heart" src={Flat} />
                </Grid>
                {/* </Box> */}
              </Grid>
              <Grid item container className={classes.grid}>
                <Grid item sm={10} md={8} lg={10} container>
                  <Grid item container spacing={2}>
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
