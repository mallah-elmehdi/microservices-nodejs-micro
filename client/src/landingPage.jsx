import React from 'react';
import { Container, Flex, Button, Stack } from '@chakra-ui/react';
import Post from './Post';

export default () => {
	return (
		<Stack>
			Tex
				<label>Create a post</label>
			<Container maxW='container.xl' px={0} py={10}>
				<Button />
				<Flex py={20} flexDir='column'>
					<Post />
				</Flex>
			</Container>
		</Stack>
	);
};
