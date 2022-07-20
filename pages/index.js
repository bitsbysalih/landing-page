import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Loading from "../components/loading/loading";
export default function Home() {
  return (
		<>
			<Head>
				<title>Landing Sailspad</title>
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
			<main>
				<Header />
				<Container>
					<Loading />
				</Container>
			</main>
		</>
	);
}