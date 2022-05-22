import React from "react";
import Head from "next/head";
import {   Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Grid,
  Box} from "@material-ui/core";
import ContactForm from "../components/contact/ContactForm";
import style from "../styles/Home.module.css";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import bgImage from "../public/aa.png";
import beyinLogo from "../components/logo/Logo";
import Link from "next/link";
import Logo from "../components/logo/Logo";
import DrawerComponent from "../components/Drawer"

export default function AutoGrid() {
  // const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Head>
        <title>Beyin</title>
        <meta name="description" content="Beyin Digital Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        {/* <Navbar /> */}
    <Box className={styles.bar}>
      <CssBaseline />
      <Toolbar>

        <div className={styles.img}>
          <Logo />
        </div>
        {isMobile ? (
          // Icon
          <DrawerComponent />
        ) : (
          <div>
             <Link href="/">
              <a className={style.link}>Home</a>
            </Link>
          </div>
        )}
      </Toolbar>
    </Box>
        {/*  */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={6} lg={6} className={style.bgImage}>
            {/* <Image src={Logo} alt="aa" /> */}

            <Image
              src={bgImage}
              alt="Beyin image"
              objectFit="cover"
              quality={90}
            />
          </Grid>
          <Grid item xs={6} lg={6}>
            <div className={style.form}>
              <ContactForm />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
