import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../shared/styles/Home.module.css';
import logoImage from '../shared/assets/images/logo.png';
import { magicRetro } from '../shared/fonts/fonts';

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
			<h1
				style={{
					fontFamily: magicRetro.style.fontFamily,
					color: '#9873da',
					margin: '2rem',
					letterSpacing: '.1rem',
					fontSize: '2rem',
					opacity: 0.9,
					textAlign: 'center',
					width: '100%'
				}}
			>
				Tra My Ngoc Nguyen
			</h1>
			<p
				style={{
					color: '#fff',
					margin: 0,
					opacity: 0.9,
					width: '100%',
					textAlign: 'center'
				}}
			>
				🔧 Under Construction
			</p>
		</main>
	</div>
);

export default Home;
