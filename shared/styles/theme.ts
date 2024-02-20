import {
	ComponentStyleConfig,
	ThemeConfig,
	extendTheme
} from '@chakra-ui/react';

import fonts from '../fonts';

// eslint-disable-next-line no-unused-vars
const darkTheme = {
	primary: {
		50: '#f2eaff',
		100: '#d3c1f2',
		200: '#b59ae5',
		300: '#9772da', // main color
		400: '#7949ce',
		500: '#6030b5',
		600: '#4b258d',
		700: '#351b66',
		800: '#200f3f',
		900: '#0d031a'
	},
	secondary: {
		50: '#e9edff',
		100: '#c1c9f3',
		200: '#9aa5e5',
		300: '#7281da', // main color
		400: '#4a5dce',
		500: '#3143b5',
		600: '#25348d',
		700: '#1a2566',
		800: '#0e1640',
		900: '#03061a'
	},
	tertiary: {
		50: '#fde9ff',
		100: '#ebc1f2',
		200: '#db9ae5',
		300: '#cc72da',
		400: '#bc4ace',
		500: '#a331b5',
		600: '#7f258d',
		700: '#5b1a66',
		800: '#370e3f',
		900: '#160219'
	},
	brand: {
		primaryFirst: '#9873DA',
		primarySecondary: '#7382DA',
		secondaryFirst: '#CC73DA',
		gradientFirst:
			'linear-gradient(76.31deg, #9873DA 6.07%, #7382DA 93.33%)',
		gradientSecondary:
			'linear-gradient(76.31deg, #9873DA 6.07%, #CC73DA 93.33%)'
	}
};

// eslint-disable-next-line no-unused-vars
const lightTheme = {
	primary: {
		50: '#f2eaff',
		100: '#d3c1f2',
		200: '#b59ae5',
		300: '#9772da',
		400: '#7949ce',
		500: '#6030b5',
		600: '#4b258d',
		700: '#351b66',
		800: '#200f3f',
		900: '#0d031a'
	},
	secondary: {
		50: '#e9edff',
		100: '#c1c9f3',
		200: '#9aa5e5',
		300: '#7281da',
		400: '#4a5dce',
		500: '#3143b5',
		600: '#25348d',
		700: '#1a2566',
		800: '#0e1640',
		900: '#03061a'
	},
	tertiary: {
		50: '#fde9ff',
		100: '#ebc1f2',
		200: '#db9ae5',
		300: '#cc72da',
		400: '#bc4ace',
		500: '#a331b5',
		600: '#7f258d',
		700: '#5b1a66',
		800: '#370e3f',
		900: '#160219'
	},
	brand: {
		primaryFirst: '#9873DA',
		primarySecondary: '#7382DA',
		secondaryFirst: '#CC73DA',
		gradientFirst:
			'linear-gradient(76.31deg, #9873DA 6.07%, #7382DA 93.33%)',
		gradientSecondary:
			'linear-gradient(76.31deg, #9873DA 6.07%, #CC73DA 93.33%)'
	}
};

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true
};

// TODO: Foundational style overrides
const colors = {
	brand: {
		primaryFirst: '#9873DA',
		primarySecondary: '#7382DA',
		secondaryFirst: '#CC73DA',
		gradientFirst:
			'linear-gradient(76.31deg, #9873DA 6.07%, #7382DA 93.33%)',
		gradientSecondary:
			'linear-gradient(76.31deg, #9873DA 6.07%, #CC73DA 93.33%)'
	}
};

// TODO: Global style overrides
const styles = {
	global: ({ colorMode }: any) => ({
		body: {
			bg: colorMode === 'dark' ? '#000' : '#fff'
		}
	})
};

// TODO: Component style overrides
const ButtonStyle: ComponentStyleConfig = {
	// style object for base or default style
	// baseStyle: {},
	// styles for different sizes ("sm", "md", "lg")
	// sizes: {},
	// styles for different visual variants ("outline", "solid")
	// variants: {},
	// default values for 'size', 'variant' and 'colorScheme'
	// defaultProps: {
	//   size: '',
	//   variant: '',
	//   colorScheme: '',
	// },
};

const components = {
	Button: ButtonStyle
};

const customTheme = extendTheme({
	config,
	fonts: {
		body: `${fonts.raleway.style.fontFamily}, Arial, san-serif`,
		heading: `${fonts.magicRetro.style.fontFamily}, Arial, san-serif`
	},
	colors,
	styles,
	components
	// fontSizes: {},
	// fontWeights: {},
	// lineHeights: {},
	// letterSpacings: {},
	// breakpoints: {},
	// spacing: {},
	// sizes: {},
	// borderRadius: {}
	// , styles
	// , borders
});

export default customTheme;
