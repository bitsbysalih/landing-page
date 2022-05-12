import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Grid,
  TextField,
  Card,
  Typography,
  CardContent,
  Button,
  Box,
} from "@material-ui/core";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/FooterContact";
import Logo from "../components/logo/Logo";
import style from "../styles/Home.module.css";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  get: {
    border: "1.5px solid #E3E3E3",
    background: "#FBFBFB",
    borderRadius: "22px",
    fontSize: "19px",
    lineHeight: "31px",
    color: "#58696D",
    fontFamily: "Poppins",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Grid container sm={0} md={12} lg={12}>
        <Grid item xs={12} sm={5} md={6} lg={6} className={style.contact}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{ margin: "1rem" }}
          >
            <Logo />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ marginTop: "3rem" }}>
          <Grid>
            <div>
              {/* <Navbar /> */}
              <Grid container direction="column" alignItems="center">
                <Typography
                  gutterBottom
                  variant="h3"
                  align="center"
                ></Typography>
                <Grid>
                  <Card style={{ maxWidth: 470 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        Contact Us
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                      >
                        Fill up the form and our team will get back to you
                        within 24 hours.
                      </Typography>
                      <form>
                        <Grid container spacing={1}>
                          <Grid xs={12} sm={6} item>
                            <TextField
                              placeholder="Enter first name"
                              label="First Name"
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid xs={12} sm={6} item>
                            <TextField
                              placeholder="Enter last name"
                              label="Last Name"
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              type="email"
                              placeholder="Enter email"
                              label="Email"
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              type="number"
                              placeholder="Enter phone number"
                              label="Phone"
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              label="Message"
                              multiline
                              rows={4}
                              placeholder="Type your message here"
                              variant="outlined"
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              type="submit"
                              className={classes.get}
                              fullWidth
                            >
                              Send
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Footer />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
