// Libraries
import Image from 'next/image';

// ChakraUI
import { Heading } from '@chakra-ui/react';

// Styles
import styles from '../shared/styles/Home.module.css';
import logoImage from '../shared/assets/images/logo.png';

const LandingPage = () => (
	<div className={styles.container}>
		<main className={styles.main}>
			<Image
				src={logoImage}
				width={174}
				height={112.54}
				alt="Tra My Nguyen's Portfolio Logo"
			/>
			<Heading
				style={{
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
			</Heading>
			<p
				style={{
					color: '#fff',
					margin: 0,
					opacity: 0.9,
					width: '100%',
					textAlign: 'center',
					fontWeight: 500
				}}
			>
				🔧 Under Construction
			</p>
		</main>
	</div>
);

export default LandingPage;
