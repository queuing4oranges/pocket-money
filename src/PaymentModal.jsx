import React from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Input
} from 'reactstrap';

export default function PaymentModal({ setPaymentModalShow }) {
return (
	<Modal isOpen={true} toggle={() => {}}>
		<ModalHeader>Payment</ModalHeader>
		<ModalBody>
			<Input
				type='number'
				placeholder='Amount'
			/>
		</ModalBody>
		<ModalFooter>
			<Button color='primary'>Submit</Button>
			<Button onClick={() => setPaymentModalShow(false)} color='secondary'>Cancel</Button>
		</ModalFooter>
	</Modal>
)
}
