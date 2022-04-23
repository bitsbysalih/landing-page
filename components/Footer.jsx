import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Image from 'next/image'
// import Beyin from "../public/logo.svg";
import Logo from "./logo/Logo";
const useStyles = makeStyles(() => ({
  grid: {
    marginLeft: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box style={{ marginTop: "12rem" }}>
      <footer>
        <Container>
          <Grid container spacing={3} xs={12} className={classes.grid}>
            <Grid item xs={3} sm={4} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Terms and Conditions
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Contact us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={4} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/" color="inherit">
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
            <Typography
              component="div"
              variant="body1"
              align="center"
              style={{ fontSize: "10px" }}
            >
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
