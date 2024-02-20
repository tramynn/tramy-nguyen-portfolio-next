'use client';

// Libraries

// ChakraUI
import { Heading, Button, useColorMode, Stack } from '@chakra-ui/react';

// Styles
import styles from '../shared/styles/Home.module.css';

const ThemePage = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div>
			<main className={styles.main}>
				<Stack>
					<Heading
						style={{
							color: '#9873da',
							margin: '2rem 0',
							// letterSpacing: '.1rem',
							fontSize: '2rem',
							opacity: 0.9,
							textAlign: 'center',
							width: '100%'
						}}
					>
						Together, we could be a Theme 💜
					</Heading>
					<Button onClick={toggleColorMode}>
						Be the {colorMode === 'dark' ? '☀️' : '🌑'} in my life
					</Button>
				</Stack>
			</main>
		</div>
	);
};

export default ThemePage;
