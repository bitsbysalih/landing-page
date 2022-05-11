import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIos";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  button: {
    border: "1.5px solid #E3E3E3",
    background: "#FBFBFB",
    borderRadius: "22px",
    width: "220px",
    height: "51px",
    fontSize: "19px",
    lineHeight: "31px",
    color: "#58696D",
    fontFamily: 'Poppins',
  },
}));

export default function StyleButton() {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.button}

        endIcon={<ArrowForwardIosSharpIcon />}
        onClick={() => console.log("hey")}
      >
        Get started
      </Button>
      <Typography variant="subtitle2" component="span" style={{ margin: "0rem 1rem" }}>
        Get one month free Trial! cancel anytime
      </Typography>
    </div>
  );
}
