import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  div: {
    marginTop: "14rem",

  },
}));

const FooterContact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.div}>
      <footer>
        {/* <Container> */}
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Grid item xs={7} sm={7} md={6} lg={5}>
              <Typography>
              <b> © Beyin</b> | All rights reserved 2022
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={1} lg={1}>
              <Link underline="none" href="/contact" color="inherit">
            {/* <a> */}
            T&C
            {/* </a> */}
              </Link>
            </Grid>
            <Grid item xs={2} sm={3} md={3} lg={2}>
              <Link
                underline="none"
                target="_blank"
                href="https://beyin.vercel.app/privacy"
                color="inherit"
              >
                {/* <a> */}
                Privacy Policy
                {/* </a> */}
              </Link>
            </Grid>
          </Grid>
        {/* </Container> */}
      </footer>
    </Box>
  );
};

export default FooterContact;
