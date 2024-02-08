import { Metadata } from 'next';
import React from 'react';
import '../shared/styles/reset.css';
import { Analytics } from '@vercel/analytics/react';
import fonts from '../shared/fonts';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'Tra My Ngoc Nguyen',
	description: "Tra My Ngoc Nguyen's Portfolio"
};

const RootLayout = ({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) => (
	<html lang='en' className={fonts.raleway.className}>
		<body>
			<Providers>{children}</Providers>
			<Analytics />
		</body>
	</html>
);

export default RootLayout;
