import React from 'react';
import FormComment from './FormComment';
import { Collapse, Box, Button, useDisclosure } from '@chakra-ui/react';

export default (props) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<Button bg='green.100' onClick={onToggle}>Add comment</Button>
			<Collapse in={isOpen} animateOpacity>
				<Box
					mt='4'
					rounded='md'
					shadow='md'>
					<FormComment id={props.id}/>
				</Box>
			</Collapse>
		</>
	);
};
