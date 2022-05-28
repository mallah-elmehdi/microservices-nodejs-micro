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
					<hr style={{ margin: '20px 0' }} />
					<Heading fontSize='md' mb={2.5}>
						{'Comments: (' + post.comments.length + ')'}
					</Heading>
					<Grid templateColumns='repeat(1, 1fr)' gap={3}>
						{post.comments.map((comment) => {
							return (
								<GridItem w='100%' h='100%'>
									<Box
										mb={5}
										p={2}
										borderRadius='lg'
										border="1px"
										borderColor='gray.400'>
										<Heading fontSize='sm'>
											{comment.author}
										</Heading>
										<Text mt={1.5}>{comment.text}</Text>
									</Box>
								</GridItem>
							);
						})}
					</Grid>
					<hr style={{ margin: '20px 0' }} />
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
