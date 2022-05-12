import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Logo from "./logo/Logo";


const Footer = () => {

  return (
    <Box style={{ marginTop: "12rem" }}>
      <footer>
        <Container style={{textAlign: "center"}} >
          <Grid container>
            <Grid item xs={3} sm={6} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Terms and Conditions
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={6} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={6} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/contact" color="inherit">
                  Contact us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={3} sm={6} md={3} lg={3}>
              <Box>
                <Link underline="none" href="#price" color="inherit">
                  Pricing
                </Link>
              </Box>
            </Grid>
          </Grid>
          {/* Logo */}
          <Box style={{ margin: "3rem", textAlign: "center" }}>
            {/* <Logo /> */}
          </Box>
          <Box>
            <Typography
              component="div"
              variant="body2"
              style={{fontSize: "10px"}}

            >

            </Typography>
          </Box>
        </Container>
      </footer>
    </Box>
  );
};

export default Footer;