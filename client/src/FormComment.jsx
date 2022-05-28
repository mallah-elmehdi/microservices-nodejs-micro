import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

export default () => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const submitEvent = async (event) => {
		event.preventDefault();
		const result = await axios.post('http://localhost:4000/posts', {
			title,
			text,
		});

		if (result) {
			setText('');
			setTitle('');
		}
	};
	return (
		<form onSubmit={submitEvent}>
			<FormControl isRequired mb={3}>
				<FormLabel htmlFor='title'>Post Title</FormLabel>
				<Input
					id='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Post Title'
				/>
			</FormControl>
			<FormControl isRequired mb={3}>
				<FormLabel htmlFor='text'>Post Content</FormLabel>
				<Input
					id='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Post Content'
				/>
			</FormControl>
			<Button bg='green.200' fontWeight='normal' type='submit'>
				Submit
			</Button>
		</form>
	);
};
