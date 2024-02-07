import { extendTheme } from '@chakra-ui/react';
import fonts from '../fonts';

const theme = extendTheme({
	fonts: {
		body: `${fonts.raleway.style.fontFamily}, Arial, san-serif`,
		heading: `${fonts.magicRetro.style.fontFamily}, Arial, san-serif`
	}
});

export default theme;
