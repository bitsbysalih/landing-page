import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import StyleButton from "./Button/StyleButton";
import Link from "next/link";
import styles from "../styles/hero.module.css"

export default function Hero() {

  return (
    <div id="hero" className={styles.box}>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item sm={7} md={6} lg={7}>
          <div className={styles.boxx}>
            <Typography    variant="h4" className={styles.typo}>
              Get the most effective business <br />
              card ever for only 1$/month
            </Typography>
            <Typography
             
              variant="body1"
              style={{ margin: "2rem 1px"}}>
              Extended Business Card Platform allows you to create extended
              business cards for you, your company, or clients in no time and
              without complex steps for as low as $1 per month!
            </Typography>
            {/* button */}
          <Link href="/contact">
          <a className={styles.link}>
          <StyleButton />
          </a>
          </Link>
          </div>
        </Grid>
        {/* video */}
        <Grid
        item
          container
          alignItems="center"
          justifyContent="center"
          sm={5}
          md={4}
          lg={3}
        >
          <Grid className={styles.grid}>
            <video
              controls
              autostart="true"
              autoPlay
              src="./video.mp4"
              type="video/mp4"
              alt="Beyin Video"
              className={styles.video}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
