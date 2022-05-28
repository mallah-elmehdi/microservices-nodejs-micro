import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import Post from './Post';
import Modal from './Modal';

export default () => {
	return (
		<Container maxW='container.xl' px={0} py={10}>
			<Modal />
			<Post />

		</Container>
	);
};
