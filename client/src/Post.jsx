import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, GridItem, Grid, Text, Heading } from '@chakra-ui/react';

export default () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const result = await axios.get('http://localhost:4000/posts');
		setPosts(result.data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	const allPosts = posts.map((post) => {
		return (
			<GridItem w='100%' h='100%'>
				<Box shadow='sm' mb={5} p={5} borderRadius='lg' bg='gray.100'>
					<Heading fontSize='xl'>{post.title}</Heading>
					<Text mt={4}>{post.text}</Text>
				</Box>
			</GridItem>
		);
	});

	return (
		<Grid templateColumns='repeat(5, 1fr)' gap={6}>
			{allPosts}
		</Grid>
	);
};
