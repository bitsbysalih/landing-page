import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <Box style={{ margin: "7rem 1rem" }}>
      <footer>
        <Container style={{ textAlign: "center" }}>
          <Grid container>
            <Grid item xs={4} sm={3} md={4} lg={4}>
              <Box>
                <Link
                  underline="none"
                  target="_blank"
                  href="https://beyin.vercel.app/privacy"
                  color="inherit"
                >
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={4} lg={4}>
              <Box>
                <Link underline="none" href="/contact" color="inherit">
                  Contact us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} md={4} lg={4}>
              <Box>
                <Link underline="none" href="#price" color="inherit">
                  Pricing
                </Link>
              </Box>
            </Grid>
          </Grid>

        </Container>

      </footer>
     
    </Box>
  );
};

export default Footer;