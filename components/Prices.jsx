import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";

const useCardHeaderStyles = makeStyles(() => ({
  card: {
    borderColor: "#E3E3E3",
    borderRadius: "8.05664px",
    transition: "0.4s",
    width:'273px',
    height: "306px",

    "&:hover": {
      transform: "scale(1.1)",
      border: "2.671387px solid #E3E3E3",
      boxShadow: "0px 67px 141px -34px rgba(0, 0, 0, 0.25)",
      borderRadius: "8.05664px",
    },
  },
  button: {
    margin: "2rem 4rem",
    border: "1px solid #E3E3E3",
    borderRadius: "37px",
    background: "#E3E3E3",
    fontFamily: "Poppins",
    width: "60%"
  },
  icon: { fontSize: "small", margin: "3px" },
  typo: { margin: "3rem 1rem" },
  title:{fontSize: "2rem"}
}));

export default function CenteredGrid() {
  const classes = useCardHeaderStyles();

  return (
    <Box id="price">
      <Typography component="div" variant="h3" className={classes.typo}>
        We made sure you get the best prices so you
        <br /> can thrive !
      </Typography>
      <Typography component="div" variant="h6" className={classes.typo}>
        Our Extended Business Card is extremely affordable at every scale. Our
        goal is to provide
        <br /> amazing technology for everyone for the lowest price possible.
      </Typography>
   <Box>
   <Box style={{ margin:"4rem auto"}}>
     <Container maxWidth="100%">
   {/* <Grid container spacing={6} xs={12} lg={12}   direction="row"
        justifyContent="center"
        alignItems="center"> */}
          {/* card one */}
          {/* <Grid item>
          <Card item className={classes.card}>
            <CardHeader
              action={
                <Typography component="div" variant="h5">
                  {" "}
                  1-9 <br /> <small>card</small>{" "}
                </Typography>
              }
              title="Personal Subscription "
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> $2 per card monthly
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Customizable card and
                logo
              </Typography>
            </CardContent>
            <Box>
              <Button className={classes.button} variant="">
                $2-$18/M only
              </Button>
            </Box>
          </Card>
        </Grid> */}
        {/* card tow */}
        {/* <Grid item>
          <Card item className={classes.card}>
            <CardHeader
              action={
                <Typography component="div" variant="h5">
                  {" "}
                  10-49 <br /> <small>cards</small>{" "}
                </Typography>
              }
              title="Startup Subscription "
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> $1.5 per user monthly
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Customizable card and
                logo
              </Typography>
            </CardContent>
            <Box>
              <Button className={classes.button} variant="">
                $15-$148.5/M only
              </Button>
            </Box>
          </Card>
        </Grid> */}
        {/* card three */}
        {/* <Grid item>
          <Paper item className={classes.card}>
            <CardHeader
              action={
                <Typography component="div" variant="h5">
                  {" "}
                  50-99 <br /> <small>cards</small>{" "}
                </Typography>
              }
              title="SME  Subscription"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> $1.2 per user monthly
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Customizable card and
                logo
              </Typography>
            </CardContent>
            <Box>
              <Button className={classes.button} variant="">
                $60-$120/M only
              </Button>
            </Box>
          </Paper>
        </Grid> */}
        {/* card fore */}
        {/* <Grid item>
          <Paper item className={classes.card}>
            <CardHeader
              action={
                <Typography component="div" variant="h5">
                  {" "}
                  100-199 <br /> <small>cards</small>{" "}
                </Typography>
              }
              title="SME+ Subscription "
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> $1.2 per user monthly
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Customizable card and
                logo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Fully customizable
                loading page
              </Typography>
            </CardContent>
            <Box>
              <Button
                className={classes.button}
                style={{ marginTop: "1rem" }}
                variant=""
              >
                $120-$240/M only
              </Button>
            </Box>
          </Paper>
        </Grid> */}
        {/* card five */}
        {/* <Grid item>
          <Paper item className={classes.card}>
            <CardHeader
              action={
                <Typography component="div" variant="h5">
                  {" "}
                  200+ <br /> <small>cards</small>{" "}
                </Typography>
              }
              title="Agency
          Subscription "
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> $1 per user
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Customizable card and
                logo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Fully customizable
                loading page
              </Typography>
            </CardContent>
            <Box>
              <Button
                className={classes.button}
                style={{ marginTop: "1rem" }}
                variant=""
              >
                $200+/M only
              </Button>
            </Box>
          </Paper>
        </Grid> */}


        {/* NEW CARD  */}
  <Grid container spacing={9} xs={12} lg={12}   direction="row"
        justifyContent="center"
        alignItems="center">
           {/* card one */}
           <Grid item>
          <Paper item className={classes.card}>
            <CardHeader
              action={
                <Typography component="div" variant="h5">
                  {" "}
                  50 <br /> <small style={{ fontSize:"24px"}}>cards</small>{" "}
                </Typography>
              }
              title="SME  Subscription"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> $1.2 per user monthly
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Customizable card and
                logo
              </Typography>
            </CardContent>
            <Box>
              <Button className={classes.button} variant="">
                $270/Y only
              </Button>
            </Box>
          </Paper>
        </Grid>
        {/* card two */}
        <Grid item>
          <Paper item className={classes.card}>
            <CardHeader
              action={
                <Typography component="div" variant="h5">
                  {" "}
                  100 <br /> <small>cards</small>{" "}
                </Typography>
              }
              title="SME+ Subscription "
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> $1.2 per user monthly
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Customizable card and
                logo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Fully customizable
                loading page
              </Typography>
            </CardContent>
            <Box>
              <Button
                className={classes.button}
                style={{ marginTop: "1rem" }}
                variant=""
              >
                $1,440/Y only
              </Button>
            </Box>
          </Paper>
        </Grid>
        {/* card three */}
         <Grid item>
          <Paper item className={classes.card}>
            <CardHeader
              action={
                <Typography component="div" variant="h5">
                  {" "}
                  200+ <br /> <small>cards</small>{" "}
                </Typography>
              }
              title="Agency Subscription"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> $1 per user
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Customizable card and
                logo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <CheckIcon className={classes.icon} /> Fully customizable
                loading page
              </Typography>
            </CardContent>
            <Box>
              <Button
                className={classes.button}
                style={{ marginTop: "1rem" }}
                variant=""
              >
                $2400+/Y only
              </Button>
            </Box>
          </Paper>
        </Grid>
</Grid>
</Container>
   </Box>
   </Box>
    </Box>
  );
}
