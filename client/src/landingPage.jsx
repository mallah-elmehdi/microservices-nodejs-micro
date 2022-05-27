import React from 'react';
import { Container, Flex, VStack } from '@chakra-ui/react';

export default () => {
	return (
		<Container maxW='container.xl' p={0}>
			<Flex py={20} flexDir="column" >
				<VStack
					w='full'
					h='full'
					p={10}
					spacing={10}
					bg='gray.100'
					borderRadius='3xl'></VStack>
				<VStack
					w='full'
					h='full'
					p={10}
					spacing={10}
					bg='gray.100'
					borderRadius='3xl'></VStack>
			</Flex>
		</Container>
	);
};
