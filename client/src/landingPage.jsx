import React from 'react';
import { Container, Flex, Button } from '@chakra-ui/react';
import Post from './Post';

export default () => {
	return (
		<Container maxW='container.xl' px={0} py={10}>
			<label>Create a post</label>
			<Button />
			<Flex py={20} flexDir="column" >
				<Post />
			</Flex>
		</Container>
	);
};
