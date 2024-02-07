import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['italic', 'normal'],
	subsets: ['latin'],
	display: 'swap'
});

const magicRetro = localFont({ src: './Magic Retro.ttf' });

const alstoria = localFont({ src: './Alstoria.ttf' });

const fonts = {
	raleway,
	magicRetro,
	alstoria
};

export default fonts;
