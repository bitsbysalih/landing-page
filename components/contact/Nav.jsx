import React, { useState } from "react";
import {
  Toolbar,
  CssBaseline,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import Logo from "../logo/Logo";
import style from "../../styles/navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";

export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <CssBaseline />
      <Toolbar>
        {/* Logo */}
        <div style={{ flexGrow: 1 }}>
          <Logo />
        </div>
        {isMobile ? (
          // Icon
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
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link href="https://ebcdb.beyin.me/signup">
                      <a className={style.get}>Gest Started</a>
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link href="/">
                      <a className={style.log}>Login</a>
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
            <IconButton
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon />
            </IconButton>
          </>
        ) : (
          <div>
            <Link href="/">
              <a className={style.link}>Home</a>
            </Link>
            <Link href="/">
                      <a className={style.get}>Gest Started</a>
                    </Link>
            <Link href="https://ebcdb.beyin.me/signup">
                      <a className={style.log}>Login</a>
            </Link>
          </div>
        )}
      </Toolbar>
    </>
  );
}
