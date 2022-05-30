import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Box, GridItem, Grid, Text, Heading } from '@chakra-ui/react';

export default (props) => {
	const [comments, setComments] = useState([]);

	const getComment = async () => {
		const result = await axios.get('http://localhost:5000/posts/' + props.id + '/comments');
		setComments(result.data);
	}

	useEffect(() => {
		getComment();
	}, []);

	return (
		<>
			<Heading fontSize='md' mb={2.5}>
				{'Comments: (' + comments.length + ')'}
			</Heading>
			<Grid templateColumns='repeat(1, 1fr)' gap={3}>
				{comments.map((comment) => {
					return (
						<GridItem w='100%' h='100%'>
							<Box
								mb={5}
								p={2}
								borderRadius='lg'
								border='1px'
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
		</>
	);
};
