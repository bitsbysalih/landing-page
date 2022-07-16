import {
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Link from "next/link";
import Logo from "./logo/Logo";
import DrawerComponent from "./Drawer";
import style from "../styles/navbar.module.css";


function Navbar() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
		<div position="static" className={style.bar}>
			<CssBaseline />
			<Toolbar>
				{/* Logo */}
				<div className={style.img}>
					<div className={style.logo}>
						<Logo />
					</div>
				</div>
				{isMobile ? (
					// Icon
					<DrawerComponent />
				) : (
					<div className={style.div}>
						<Link href="/">
							<a className={style.link}>Home</a>
						</Link>
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
							<Link href="https://app.sailspad.com/signup">
								<a className={style.get}>Get Started</a>
							</Link>

							<Link href="https://app.sailspad.com/login">
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
