import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormControl,
	FormLabel,
	Input,
	Button
} from '@chakra-ui/react';

export default () => {
	function validateName(value) {
		let error;
		if (!value) {
			error = 'Name is required';
		}
		return error;
	}

	return (
		<Formik
			initialValues={{ name: 'Sasuke' }}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			}}>
			{(props) => (
				<Form>
					<Field name='name' validate={validateName}>
						{({ field, form }) => (
							<FormControl
								isInvalid={
									form.errors.name && form.touched.name
								}>
								<FormLabel htmlFor='name'>First name</FormLabel>
								<Input
									{...field}
									id='name'
									placeholder='name'
								/>
								<FormErrorMessage>
									{form.errors.name}
								</FormErrorMessage>
							</FormControl>
						)}
					</Field>
					<Button
						mt={4}
						colorScheme='teal'
						isLoading={props.isSubmitting}
						type='submit'>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	);
};
