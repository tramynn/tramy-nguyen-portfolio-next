import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import fonts from '../fonts';

export const lightTheme = {
	primary: {
		300: '#ECEDF0',
		400: '#FDFDFF'
	},
	secondary: {
		300: '#646464',
		400: '#424242'
	},
	brand: {
		300: '#7C82FB',
		400: '#5F63FC'
	}
};

export const darkTheme = {
	primary: {
		300: '#646464',
		400: '#424242'
	},
	secondary: {
		300: '#ECEDF0',
		400: '#FDFDFF'
	},
	brand: {
		300: '#94d3ac',
		400: '#29c7ac'
	}
};

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true
};

// TODO: Global style overrides

// TODO: Foundational style overrides

// TODO: Component style overrides

const theme = extendTheme({
	config,
	fonts: {
		body: `${fonts.raleway.style.fontFamily}, Arial, san-serif`,
		heading: `${fonts.magicRetro.style.fontFamily}, Arial, san-serif`
	},
	fontSizes: {},
	fontWeights: {},
	colors: {},
	lineHeights: {},
	letterSpacings: {},
	breakpoints: {},
	spacing: {},
	sizes: {},
	borderRadius: {}
	// , styles
	// , borders
	// , components: {
	// 	Button
	// }
});

export default theme;
