import React from 'react';
import { useForm } from 'react-hook-form';
import {
	Modal,
	ModalHeader,
	ModalBody,
	Button,
	Form, FormGroup, Label
} from 'reactstrap';
import { apiClient } from '../api';

export default function PaymentModal({ setPaymentModalShow, setSuccess }) {
	const { register, handleSubmit } = useForm();

	const amountField = register('amount');
	const noteField = register('note');

	const addTransaction = async (values) => {
		console.log(values, 'values')
		try {
			const response = await apiClient.post('/transactions/create.php', {
				amount: values.amount,
				note: values.note
			});

			if(response.status !== 200) {
				throw new Error(`Something went wrong. Response status: ${response.status}`);
			}
			setSuccess(true);
			setPaymentModalShow(false);
		} catch {
			console.error('Could not add transaction');
		}
	}

	return (
		<Modal isOpen={true}>
			<ModalHeader>Neue Transaktion</ModalHeader>
			<ModalBody>
				<Form onSubmit={handleSubmit(addTransaction)}>
					<FormGroup>
						<Label>Betrag eingeben</Label>
						<input
							className='form-control'
							type='number'
							placeholder='Betrag'
							id='amount'
							name='amount'
							step={0.01}
							{...amountField}
						/>
					</FormGroup>
					<FormGroup>
						<Label>Notiz hinzufügen</Label>
						<input
							className='form-control'
							id='note'
							name='note'
							{...noteField}
							type='text'
						/>
					</FormGroup>
					<span className="d-flex justify-content-between">
						<Button type='submit' color='primary'>Bestätigen</Button>
						<Button onClick={() => setPaymentModalShow(false)} color='secondary'>Cancel</Button>
					</span>
				</Form>
			</ModalBody>
		</Modal>
	)
}
