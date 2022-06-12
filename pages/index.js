import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Loading from "../components/loading/loading";
export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Beyin</title>
      	<meta charset="utf-8" />
	    	<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="description" content="Beyin Digital Technology" />
         {/* <meta name="description" content="Watch TV shows and movies online. Stream TV episodes of South Park, Empire, SNL, Modern Family and popular movies on your favorite devices. Start your free trial now. Cancel anytime." /> */}
         <meta data-rh="true" name="google" content="translate" />
         <meta data-rh="true" name="keywords" content="Businesses card, virtual business card, online business card" />
         <meta data-rh="true" name="keywords" content="Augmented Reality business card,AR businesses card,VR businesses card,Virtual Reality Business card,Extended reality business card" />
         <meta data-rh="true" name="robots" content="index, follow"/>
         <meta name="Linkedin:site" content="@beyin-tech" />
         <meta name="instagram:site" content="@beyin.me" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Container>
          <Loading />
        </Container>
      </div>
    </>
  );
}