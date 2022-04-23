import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
  },
  icon: {
    color: "black",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/">
                <a className={classes.link}>Home</a>
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
<<<<<<< HEAD
            <Link href="/about">
              <a className={classes.link}>About</a>
            </Link>
=======
              <Link href="/" >
                        <a className={classes.link}>About</a>
              </Link>
>>>>>>> styled and remove about page
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
<<<<<<< HEAD
              <Link href="/contact">
=======
              <Link href="/" >
>>>>>>> styled and remove about page
                <a className={classes.link}>How it works </a>
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
<<<<<<< HEAD
              <Link href="/fueatures">
=======
              <Link href="/" >
>>>>>>> styled and remove about page
                <a className={classes.link}>Fueatures</a>
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
<<<<<<< HEAD
              <Link href="/prices">
                <a className={classes.link}> Prices</a>
              </Link>
=======
              <Link href="/" >
               <a className={classes.link}> Prices</a>
                </Link>
>>>>>>> styled and remove about page
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
