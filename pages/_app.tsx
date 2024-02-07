import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['italic', 'normal'],
	subsets: ['latin'],
	display: 'swap'
});

const MyApp = ({ Component, pageProps }: AppProps) => (
	<main className={raleway.className}>
		<Component {...pageProps} />
	</main>
);

export default MyApp;
