import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logoImage from '../shared/assets/images/logo.png';

const Home: NextPage = () => (
	<div className={styles.container}>
		<Head>
			<title>Tra My Ngoc Nguyen</title>
			<meta name='description' content="Tra My Ngoc Nguyen's Portfolio" />
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<main className={styles.main}>
			<Image
				src={logoImage}
				width={174}
				height={112.54}
				alt="Tra My Nguyen's Portfolio Logo"
			/>
			<h1 className={styles.title} style={{ fontWeight: 700 }}>
				&nbsp; Tra My Ngoc Nguyen
			</h1>
			<p className={styles.description}>🔧 Under Construction</p>
		</main>
	</div>
);

export default Home;
