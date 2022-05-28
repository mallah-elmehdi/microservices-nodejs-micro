import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, GridItem, Grid, Text, Heading } from '@chakra-ui/react';
import Collapse from './Collapse';


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
				<Box shadow='sm' mb={5} p={5} borderRadius='lg' bg='gray.50'>
					<Heading fontSize='xl'>{post.title}</Heading>
					<Text mt={4}>{post.text}</Text>
					<hr style={{margin: "20px 0"}} />
					<Heading fontSize='md'>{"Comments: (" + post.comments.length + ")"}</Heading>
					<>{post.comments.map((comment) => {
						return (
							
						)
					})}</>
					<hr style={{margin: "20px 0"}} />
					<Collapse id={post.id}></Collapse>
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
