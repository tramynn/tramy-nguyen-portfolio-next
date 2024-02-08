'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../shared/styles/theme';

const Providers = ({ children }: { children: React.ReactNode }) => (
	<ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default Providers;
