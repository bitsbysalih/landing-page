
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Head from 'next/head'



export default function Home() {

  return (

     <>
       <Head>
         <title>Beyin</title>
         <meta name="description" content="Beyin Digital Technology" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
        <main className={styles.container}>
        <Layout />
      </main>
     </>

  )
}
