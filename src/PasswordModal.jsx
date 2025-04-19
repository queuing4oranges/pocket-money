import React from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Input
} from 'reactstrap';

import ToastAlert from './ToastAlert';

export default function PasswordModal({ passwordModal, setPasswordModal, password, setPassword, setPaymentModalShow, setShowToast }) {
	const correctPassword= import.meta.env.VITE_MODAL_PASSWORD;

	const handlePasswordSubmit = () => {
		if (password === correctPassword) {
			setPasswordModal(false);
			setPaymentModalShow(true);
		} else {
			setShowToast(true)
			setPasswordModal(false);
		}
	};

	return (
		<>
			<Modal isOpen={passwordModal} toggle={() => setPasswordModal(!passwordModal)}>
				<ModalHeader>Enter Password</ModalHeader>
				<ModalBody>
				<Input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
				/>
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={handlePasswordSubmit}>Submit</Button>
					<Button color='secondary' onClick={() => setPasswordModal(false)}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}
