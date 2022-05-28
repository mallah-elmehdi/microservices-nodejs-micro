import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VStack, Flex } from '@chakra-ui/react';

export default () => {
	const [posts, usePosts] = useState([]);

	const getPosts = async () => {
		const result = await axios.get('http://localhost:4000/posts');
		console.log(result);
		setPosts(result.data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<Flex py={20} flexDir='column'>
			{}
			<VStack
				w='full'
				mb={10}
				p={10}
				spacing={10}
				bg='gray.100'
				borderRadius='3xl'></VStack>
		</Flex>
	);
};
