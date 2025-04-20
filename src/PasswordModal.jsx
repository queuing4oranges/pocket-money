import React from 'react';
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Input
} from 'reactstrap';

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
			<Modal centered scrollable isOpen={passwordModal} toggle={() => setPasswordModal(!passwordModal)}>
				<ModalHeader>Brudi, tipp das Passwort</ModalHeader>
				<ModalBody>
				<Input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
				/>
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={handlePasswordSubmit}>Los geht's</Button>
					<Button color='secondary' onClick={() => setPasswordModal(false)}>Schließen</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}
