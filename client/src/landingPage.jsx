import React from 'react';
import { Container, Flex, Button, Text } from '@chakra-ui/react';
import Post from './Post';
import Modal from './Modal';

export default () => {
	return (
		<Container maxW='container.xl' px={0} py={10}>
			<Modal></Modal>
			<Flex py={20} flexDir='column'>
				<Post />
			</Flex>
		</Container>
	);
};
