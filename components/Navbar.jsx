import React from "react";
import {
  Toolbar,
  CssBaseline,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Link from "next/link";
import Logo from "./logo/Logo";
import DrawerComponent from "./Drawer";
import style from "../styles/navbar.module.css";
// const useStyles = makeStyles((theme) => ({
//   bar: {
//     boxShadow: "0 1px 70px -20px rgba(0, 0, 0, 0.3)",
//   },
//   link: {
//     fontFamily: "Poppins",
//     textDecoration: "none",
//     color: "#000",
//     fontSize: "21px",
//     marginLeft: theme.spacing(3),
//   },
//   // img: {
//   //   flexGrow: "1",

//   // },
//   log: {
//     marginLeft: "1rem",
//     border: "1px solid #e3e3e3",
//     borderRadius: "14rem",
//     boxShadow: "0px 3px 51px rgba(0, 0, 0, 0.03)",
//     textTransform: 'none',
//     fontWeight: "400",
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontSize: '14px',
//     lineHeight: '21px',
//     textAlign: 'center',
//     padding:'0.6rem 3rem'

//   },
//   get: {
//     marginLeft: "12rem",
//     borderRadius: "14px",
//     filter: "0px 3px 51px rgba(0, 0, 0, 0.03)",
//     transition: "all 240ms ease-in-out",
//     cursor: "pointer",
//     textTransform: 'none',
//  fontFamily: 'Poppins',
// fontStyle: 'normal',
// fontWeight: '400',
// fontSize: '14px',
// lineHeight: '21px',
// textAlign: 'center',
// color: '#58696D'
//   },
// }));

function Navbar() {
  // const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div position="static" className={style.bar}>
      <CssBaseline />
      <Toolbar>
        {/* Logo */}
        <div className={style.img}>
          <Logo />
        </div>
        {isMobile ? (
          // Icon
          <DrawerComponent />
        ) : (
          <div className={style.div}>
            <Link href="#hero">
              <a className={style.link}>About</a>
            </Link>
            <Link href="#work">
              <a className={style.link}>How it works</a>
            </Link>
            <Link href="#features">
              <a className={style.link}>Features</a>
            </Link>
            <Link href="#price">
              <a className={style.link}>Prices</a>
            </Link>
            <div className={style.btn}>
              <Link href="/contact">
                <a className={style.get}>Get Started</a>
              </Link>

              <Link href="#">
                <a className={style.log}>Login</a>
              </Link>
            </div>
          </div>
        )}
      </Toolbar>
    </div>
  );
}
export default Navbar;
