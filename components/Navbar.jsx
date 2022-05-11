import React from "react";
import {
  Toolbar,
  CssBaseline,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
  Box
} from "@material-ui/core";
import Link from "next/link";
import Logo from "./logo/Logo";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  bar: {
    boxShadow: "0 1px 70px -20px rgba(0, 0, 0, 0.3)",
  },
  link: {
    fontFamily: "Poppins",
    textDecoration: "none",
    color: "#000",
    fontSize: "21px",
    marginLeft: theme.spacing(6),
  },
  img: {
    flexGrow: "1",

  },
  log: {
    border: "1px solid #e3e3e3",
    width: "114px",
    marginLeft: "1rem",
    borderRadius: "14px",
    boxShadow: "0px 3px 51px rgba(0, 0, 0, 0.03)",
    transition: "all 240ms ease-in-out",
    cursor: "pointer",
  },
  get: {
    marginLeft: "12rem",
    borderRadius: "14px",
    filter: "0px 3px 51px rgba(0, 0, 0, 0.03)",
    transition: "all 240ms ease-in-out",
    cursor: "pointer",
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div position="static" className={classes.bar}>
      <CssBaseline />
      <Toolbar>
        {/* Logo */}
       <div className={classes.img}>
       <Logo />
       </div>
        {isMobile ? (
          // Icon
          <DrawerComponent />
        ) : (
          <div style={{ flexGrow: 0.7 }}>
            <Link href="#hero">
              <a className={classes.link} >About</a>
            </Link>
            <Link href="#work">
              <a className={classes.link}>How to work</a>
            </Link>
            <Link href="#features">
              <a className={classes.link}>Features</a>
            </Link>
            <Link href="#price">
              <a className={classes.link}>Prices</a>
            </Link>

            <>
              <Button className={classes.get}>Get Started</Button>
              <Button className={classes.log}>Login</Button>
            </>
          </div>
        )}
      </Toolbar>
    </div>
  );
}
export default Navbar;
