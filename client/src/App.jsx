import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from './landingPage';

export default () => {
	return (
		<ChakraProvider>
			<LandingPage />
		</ChakraProvider>
	);
};
