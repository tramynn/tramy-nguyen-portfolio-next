import '../shared/styles/reset.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import theme from '../shared/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ChakraProvider theme={theme}>
		<Component {...pageProps} />
		<Analytics />
	</ChakraProvider>
);

export default MyApp;
