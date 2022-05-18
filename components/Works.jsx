// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import StyleButton from "./Button/StyleButton";
import Link from "next/link";
import style from "../styles/works.module.css";

// const useStyles = makeStyles(() => ({
//   card: {
//     margin: "5rem auto",
//     width: "100%",
//     height: "100%",
//     background: "#FBFBFB",
//     boxShadow: "0px 138px 189px -76px rgba(0, 0, 0, 0.06)",
//     border: "2px solid rgba(227, 227, 227, 0.8)",
//     borderRadius: "20px",
//   },
//   box: { margin: "6rem auto" },
//   button: {
//     border: "1.5px solid #E3E3E3",
//     background: "#FBFBFB",
//     borderRadius: "1rem",
//     width: "220px",
//     height: "51px",
//     fontSize: "21px",
//     lineHeight: "31px",
//     margin: "3rem auto"
//   },
//   link: {
//     fontFamily: "Poppins",
//     textDecoration: "none",
//     color: "#58696D",
//     fontSize: "21px",

//   },
// }));

export const Works = () => {
  // const classes = useStyles();
  return (
    <Box  id="works" className={style.box}>

<Grid >
       <Grid className={style.card}>
          <Typography component="div" variant=""  className={style.typo}>
            Let’s make your business card close more deals
          </Typography>
        </Grid>

       <Grid className={style.grid}>
       <Link href="/contact">
          <a className={style.link}>
            <StyleButton />
          </a>
        </Link>
       </Grid>
        </Grid>


    </Box>
  );
};

export default Works;
