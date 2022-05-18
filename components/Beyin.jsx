import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Vector from "../public/vector1.png";
import Vectoor from "../public/Vector2.png";
import Flat from "../public/flat.png";
import style from "../styles/beyin.module.css";

// const useStyles = makeStyles((theme) => ({
//   div: {
//     padding: "1.8rem",
//     maxWidth: "100%",
//     textAlign: "center",

//   },
//   box: {
//     display: "flex",
//     justifyContent: "left",
//     alignItems: "center",
//   },
//   box1: {
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",

//   },
//   typo: {
//     textAlign: "left",
//     margin: "1rem auto",
//     '@media only screen and (max-width: 600px)': {
//       margin:"auto -0.4rem",

//     },
//   },
//   grid: {
//     margin: "1.2rem auto",
//     width: "100%",
//     height: "100%",
//   },
// }));

export default function Beyin() {
  // const classes = useStyles();

  return (
    <div id="features">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item sm={12} md={6} lg={6}>
          {/* card one */}
          <div className={style.div}>
            <Grid container item spacing={8} sm={12} md={12} lg={12}>
              <Grid container className={style.grid}>
                {/* card one one */}
                <div className={style.box}>
                  <Image alt="icon heart" src={Vector} />
                </div>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                  <Grid container style={{ marginLeft: "1.4rem" }}>
                    <Grid item>
                      <Typography variant="h5" className={style.typo}>
                        it keeps a lasting impression every time
                      </Typography>
                      <Typography variant="body1" className={style.typo2}>
                        Be memorable! leave a card that can be experienced again
                        and again long after you’re gone.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* card two  */}
              <Grid container className={style.grid}>
                <div className={style.box}>
                  <Image alt="icon infinity" src={Vectoor} />
                </div>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                  <Grid container style={{ marginLeft: "0.9rem" }}>
                    <Grid item>
                      <Typography variant="h5" className={style.typo}>
                        Unlimited copies and views
                      </Typography>
                      <Typography variant="body1" className={style.typo2}>
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
        <Grid item sm={12} md={6} lg={5}>
          <div className={style.div}>
            <Grid container>
              <Grid container className={style.grid}>
                {/* <Box> */}
                <Grid className={style.box1}>
                  <Image alt="icon heart" src={Flat} />
                </Grid>
                {/* </Box> */}
              </Grid>
              <Grid item container className={style.grid}>
                <Grid item sm={10} md={8} lg={10} container>
                  <Grid item container>
                    <Grid item>
                      <Typography variant="h5" className={style.typo}>
                        Works on all Smart devices
                      </Typography>
                      <Typography variant="body2" className={style.typo2}>
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
