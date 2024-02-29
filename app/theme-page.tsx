'use client';

// ChakraUI
import {
	Heading,
	Button,
	useColorMode,
	Stack,
	Box,
	Container,
	Text
} from '@chakra-ui/react';

const ThemePage = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div>
			<Container maxW='5xl' padding='24px 48px 48px'>
				<Stack>
					<Heading
						style={{
							margin: '2rem 0',
							letterSpacing: '.1rem',
							fontSize: '2rem',
							opacity: 0.9,
							textAlign: 'center',
							width: '100%'
						}}
						color='brand.primary'
					>
						Together, we could be a Theme 💜
					</Heading>
					<Button onClick={toggleColorMode}>
						Be the {colorMode === 'dark' ? '☀️' : '🌑'} in my life
					</Button>
				</Stack>
				<Stack spacing='24px' marginTop='40px'>
					<Heading
						as='h4'
						size='md'
						letterSpacing='.1rem'
						fontFamily='body'
						fontWeight='800'
					>
						Primary Color
					</Heading>
					<Box bg='brand.primary' width='75px' height='75px' />
					<Heading
						as='h4'
						size='md'
						letterSpacing='.1rem'
						fontFamily='body'
						fontWeight='800'
					>
						Secondary Color
					</Heading>
					<Box bg='brand.secondary' width='75px' height='75px' />
					<Heading
						as='h4'
						size='md'
						letterSpacing='.1rem'
						fontFamily='body'
						fontWeight='800'
					>
						Tertiary Color
					</Heading>
					<Box bg='brand.tertiary' width='75px' height='75px' />
					<Heading
						as='h4'
						size='md'
						letterSpacing='.1rem'
						fontFamily='body'
						fontWeight='800'
					>
						Gradient Colors
					</Heading>
					<Stack direction={['column', 'row']} spacing='24px'>
						<Box
							bg='brand.gradients.primary'
							width='75px'
							height='75px'
						/>
						<Box
							bg='brand.gradients.secondary'
							width='75px'
							height='75px'
						/>
					</Stack>
					<Heading
						as='h4'
						size='md'
						letterSpacing='.1rem'
						fontFamily='body'
						fontWeight='800'
					>
						Typography
					</Heading>
					<Stack
						direction={['column', 'row']}
						spacing='24px'
						alignItems='center'
					>
						<Heading as='h1' size='4xl' letterSpacing='.1rem'>
							Heading 1
						</Heading>
						<Heading
							as='h2'
							size='3xl'
							letterSpacing='.1rem'
							fontFamily='subheading'
						>
							Sub Header One
						</Heading>
					</Stack>
					<Stack
						direction={['column', 'row']}
						spacing='24px'
						alignItems='center'
					>
						<Heading
							as='h2'
							size='3xl'
							letterSpacing='.1rem'
							marginTop='24px'
						>
							Heading 2
						</Heading>
						<Heading
							as='h3'
							size='2xl'
							letterSpacing='.1rem'
							marginTop='24px'
							fontFamily='subheading'
						>
							Sub Header Two
						</Heading>
					</Stack>
					<Stack
						direction={['column', 'row']}
						spacing='24px'
						alignItems='center'
					>
						<Heading
							as='h3'
							size='2xl'
							letterSpacing='.1rem'
							marginTop='24px'
						>
							Heading 3
						</Heading>
						<Heading
							as='h4'
							size='xl'
							letterSpacing='.1rem'
							marginTop='24px'
							fontFamily='subheading'
						>
							Sub Header Two
						</Heading>
					</Stack>
					<Stack
						direction={['column', 'row']}
						spacing='24px'
						alignItems='center'
					>
						<Heading
							as='h4'
							size='xl'
							letterSpacing='.1rem'
							marginTop='24px'
						>
							Heading 4
						</Heading>
					</Stack>
					<Stack
						direction={['column', 'row']}
						spacing='24px'
						alignItems='center'
					>
						<Heading
							as='h5'
							size='lg'
							letterSpacing='.1rem'
							marginTop='24px'
						>
							Heading 5
						</Heading>
					</Stack>
					<Stack
						direction={['column', 'row']}
						spacing='24px'
						alignItems='center'
					>
						<Heading
							as='h6'
							size='md'
							letterSpacing='.1rem'
							marginTop='24px'
						>
							Heading 6
						</Heading>
					</Stack>
					<Text fontSize='sm'>Body 1</Text>
					<Text fontSize='xs'>Body 2</Text>
				</Stack>
			</Container>
		</div>
	);
};

export default ThemePage;
