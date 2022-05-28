import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

export default (props) => {
	const [author, setAuthor] = useState('');
	const [text, setText] = useState('');

	const submitEvent = async (event) => {
		event.preventDefault();
		const result = await axios.post(
			'http://localhost:5000/posts/' + props.id + '/comments',
			{
				author,
				text,
			}
		);

		if (result) {
			setText('');
			setAuthor('');
		}
	};
	return (
		<form onSubmit={submitEvent}>
			<FormControl isRequired mb={3}>
				<FormLabel htmlFor='author'>Author name</FormLabel>
				<Input
					id='author'
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					placeholder='Author name'
				/>
			</FormControl>
			<FormControl isRequired mb={3}>
				<FormLabel htmlFor='text'>Comment Content</FormLabel>
				<Input
					id='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Comment Content'
				/>
			</FormControl>
			<Button bg='green.200' fontWeight='normal' type='submit'>
				Submit
			</Button>
		</form>
	);
};
