import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tramy Nguyen</title>
        <meta name="description" content="Tramy Nguyen Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tramy Nguyen&apos;s Portfol.io
        </h1>

        <p className={styles.description}>
          Coming Soon<br />Summer 2022
        </p>
      </main>
    </div>
  )
}

export default Home
