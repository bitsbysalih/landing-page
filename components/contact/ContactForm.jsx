import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import emailjs from "@emailjs/browser";

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
  const form = useRef();
  const [name, setName] = React.useState("");
  const [namee, setNamee] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cimlf7l",
        "template_uwx4iaq",
        e.target,
        "e2S4DcJNxPge4El9X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // alert('Email Send!')
    setName("");
    setNamee("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const classes = useStyles();

  return (
    <Grid item style={{ margin: "3rem auto" }}>
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
                    component="div"
                    gutterBottom
                  >
                    Fill up the form and our team will get back to you within 24
                    hours.
                  </Typography>
                  <form ref={form} onSubmit={sendEmail}>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          type="text"
                          name="first name"
                          value={name}
                          placeholder="Enter first name"
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          type="text"
                          name="last name"
                          value={namee}
                          placeholder="Enter last name"
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => setNamee(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="user_email"
                          type="email"
                          value={email}
                          placeholder="Enter email"
                          label="Email"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="phone"
                          type="text"
                          value={phone}
                          placeholder="Enter phone number"
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="message"
                          label="message"
                          value={message}
                          type="text"
                          multiline
                          row={4}
                          placeholder="Type your message here"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          value="send"
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
  );
}
