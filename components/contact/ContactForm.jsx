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
} from "@material-ui/core";
import Footer from "../footer/FooterContact";

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

export default function ContactForm() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} style={{ marginTop: "3rem" }}>
      <Grid>
        <div>
          <Grid container direction="column" alignItems="center">
            <Typography gutterBottom variant="h3" align="center"></Typography>
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
                    Fill up the form and our team will get back to you within 24
                    hours.
                  </Typography>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                        type="text"
                        name="name"
                          placeholder="Enter first name"
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                         type="text"
                         name="name"
                          placeholder="Enter last name"
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                         name="email"
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
                          name="phone"
                          type="text"
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
                        <Button type="submit" className={classes.get} fullWidth>
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
  );
}
