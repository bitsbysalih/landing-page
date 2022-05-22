import React ,{useState}from "react";
import Head from "next/head";
import {   Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ContactForm from "../components/contact/ContactForm";
import style from "../styles/Home.module.css";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import bgImage from "../public/contect.png";
import beyinLogo from "../components/logo/Logo";
import Link from "next/link";
import Logo from "../components/logo/Logo";


export default function AutoGrid() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Head>
        <title>Beyin Contact</title>
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
          <>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link href="/">
                    <a className={style.link}>Home</a>
                  </Link>
                </ListItemText>
              </ListItem>
              </List>
              </Drawer>
              <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={style.icon}
      >
        <MenuIcon />
      </IconButton>
              </>

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
          className={style.box}
        >
          <Grid item xs={6} className={style.bgImage}>
            {/* <Image src={Logo} alt="aa" /> */}

            <Image
              src={bgImage}
              alt="Beyin image"
              objectFit="cover"
              quality={100}
            />
          </Grid>
          <Grid item xs={6}>
            <div className={style.form}>
              <ContactForm />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
