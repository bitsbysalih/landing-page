import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/Navbar";
import Container from "@material-ui/core/Container";
import Loading from "../components/loading/loading";
export default function Home() {
  return (
    <>
      <Head>
        <title>Beyin</title>
        <meta name="description" content="Beyin Digital Technology" />
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
