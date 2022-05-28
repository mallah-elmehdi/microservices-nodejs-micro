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
} from '@chakra-ui/react';
import Form from './Form';

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
						<Form onSubmit={onClose}></Form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
