import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	FormControl,
	FormLabel,
	Input
} from '@chakra-ui/react';

export default () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button
				bg='green.200'
				fontWeight='normal'
				size='lg'
				height='48px'
				width='200px'
				onClick={onOpen}>
				Create a post
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<FormControl>
							<FormLabel htmlFor='title'>Post Title</FormLabel>
							<Input id='title' name='title' type='text' />
							<FormLabel htmlFor='text'>Post Content</FormLabel>
							<Input id='text' name='text' type='text' />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button variant='ghost'>Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
