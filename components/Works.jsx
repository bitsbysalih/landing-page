import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  card: {
    margin: "5rem 0rem",
    width: "100%",
    height: "481px",
    background: "#FBFBFB",
    boxShadow: "0px 138px 189px -76px rgba(0, 0, 0, 0.06)",
    border: "2px solid rgba(227, 227, 227, 0.8)",
    borderRadius: "20px",
  },
  box: { margin: "6rem 0rem" },
  button: {
    border: "1.5px solid #E3E3E3",
    background: "#FBFBFB",
    borderRadius: "1rem",
    width: "220px",
    height: "51px",
    fontSize: "21px",
    lineHeight: "31px",
  },
}));

export const Works = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} id="works">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box className={classes.box}>
          <Typography component="div" variant="h3" style={{textAlign: "center"}}>
            Let’s make your business card
            <br /> close more deals
          </Typography>
        </Box>
        <Button
          className={classes.button}
          type="button"
          onClick={() => console.log("hey")}
          endIcon={<ArrowForwardIosSharpIcon />}
        >
          Get Started
        </Button>
      </Grid>
    </Card>
  );
};

export default Works;
