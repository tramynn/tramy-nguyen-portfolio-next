import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoImage from '../shared/assets/images/logo.png';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tramy Nguyen</title>
        <meta name="description" content="Tramy Nguyen Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
            src={logoImage}
            width={174}
            height={112.54}
            alt="Tra My Nguyen's Portfolio Logo"
        />
        <h1 className={styles.title}>
          &nbsp; Tra My Ngoc Nguyen
        </h1>
      </main>
    </div>
  )
}

export default Home
