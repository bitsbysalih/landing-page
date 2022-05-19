import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./logo/Logo";

const useStyles = makeStyles(() => ({
  grid: {
    "@media only screen and (max-width: 600px)": {
      fontSize: "16px",


    },
  },
  footer: {
    fontSize: "15px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "9px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box style={{ marginTop: "12rem" }}>
      <footer>
        <Container style={{ textAlign: "center" }}>
          <Grid container spacing={4} className={classes.grid}>
            {/* <Grid item xs={3} sm={6} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  T&C
                </Link>
              </Box>
            </Grid> */}
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Box>

                <Link underline="none" target="_blank" href="https://beyin.vercel.app/privacy" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Box>
                <Link underline="none" href="/contact" color="inherit">
                  Contact us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Box>
                <Link underline="none" href="#price" color="inherit">
                  Pricing
                </Link>
              </Box>
            </Grid>
          </Grid>
          {/* Logo */}
          <Box style={{ margin: "3rem", textAlign: "center" }}>
            <Logo />
          </Box>
          <Box>
            <Typography variant="body2"  className={classes.footer}>
              Beyin Digital Technology Limited | Abu Dhabi, Masdar city
              <br />
              © Beyin Digital Technology Limited - 2022. The trademarks, logos,
              designs, services and the content appearing herein, is exclusively
              <br />
              owned by Beyin Digital Technology Limited, and/or its licensors,
              and are protected. Any unauthorized use or reproduction or
              <br /> distribution, shall attract suitable action under
              applicable law.
            </Typography>
          </Box>
        </Container>
      </footer>
    </Box>
  );
};

export default Footer;
