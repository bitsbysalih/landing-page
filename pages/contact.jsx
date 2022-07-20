
import Head from "next/head";
import Grid from "@material-ui/core/Grid"
import {  makeStyles, createStyles } from "@material-ui/core";
import Side from "../components/contact/Side";
import Form from "../components/contact/ContactForm";
import Nav from "../components/contact/Nav";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      position: "fixed",
    },
    bgImage: {
      height: "100vh",
      "@media only screen and (max-width: 640px)": {
        display: "none",
      },
    },
    form: {
      // position: 'relative',
      "@media only screen and (max-width: 1440px)": {
        margin: "3rem auto",
      },
    },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
		<>
			<Head>
				<title>Sailspad Contact</title>
				<meta name="description" content="Sailspad Digital Technology" />
				<meta
					name="description"
					content="Augmented reality service providers
نبتكر ونطور المشاريع الرقمية | Digital innovators"
				/>
				<meta data-rh="true" name="google" content="translate" />
				<meta
					data-rh="true"
					name="keywords"
					content="Businesses card, virtual business card, online business card"
				/>
				<meta
					data-rh="true"
					name="keywords"
					content="Augmented Reality business card,AR businesses card,VR businesses card,Virtual Reality Business card,Extended reality business card"
				/>
				<meta
					data-rh="true"
					name="keywords"
					content="webxr,mobile apps,webvr,augmented reality technology,augmented reality apps,my business card"
				/>
				<meta
					data-rh="true"
					name="keywords"
					content="business card design,phone app,app development,free business cards,custom business cards,order business cards"
				/>
				<meta
					data-rh="true"
					name="keywords"
					content="mobile application development,business cards online,best android apps,business site,ar technology,ar app,best business cards"
				/>

				<meta data-rh="true" name="robots" content="index, follow" />
				<meta name="Linkedin:site" content="@beyin-tech" />
				<meta name="instagram:site" content="@beyin.me" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<Nav />

				<Grid
					container
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
					className={classes.boz}
				>
					<Grid item xs={6} className={classes.bgImage}>
						<Side />
					</Grid>

					<Grid item sm={6} className={classes.form}>
						<Form />
					</Grid>
				</Grid>
			</>
		</>
	);
}
