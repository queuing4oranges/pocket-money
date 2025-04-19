import React, { useState } from 'react';
import {
	Container, Row, Col,
	Button,
	Card, CardHeader, CardBody
} from 'reactstrap';

import './pocketmoney.scss';
import PasswordModal from './PasswordModal';
import PaymentModal from './PaymentModal';
import ToastAlert from './ToastAlert';

export default function PocketMoney() {
	const [passwordModal, setPasswordModal] = useState(false);
	const [paymentModalShow, setPaymentModalShow] = useState(false);
	const [password, setPassword] = useState('');
	const [showToast, setShowToast] = useState(false);

	return (
		<Container fluid className='h-100 w-100 pocket-money-container d-flex flex-column justify-content-center align-items-center'>
			<Row>
				<Col className='d-flex justify-content-center align-items-center'>
					<Card>
						<CardHeader>
							<h1>Miquels Budget</h1>
						</CardHeader>
						<CardBody className='d-flex flex-column justify-content-center align-items-center'>
							<h5>Verfügbarer Betrag</h5>
							<h2 className='my-3'>-- Betrag variable --</h2>
							<Button onClick={() => setPasswordModal(true)} className='my-3' color='info'>Einzahlung/Auszahlung</Button>
						</CardBody>
					</Card>
					{passwordModal &&
						<PasswordModal
							passwordModal={passwordModal}
							setPasswordModal={setPasswordModal}
							password={password}
							setPassword={setPassword}
							paymentModalShow={paymentModalShow}
							setPaymentModalShow={setPaymentModalShow}
							setShowToast={setShowToast}
						/>
					}
					{showToast &&
						<ToastAlert setShowToast={setShowToast} />
					}
					{paymentModalShow &&
						<PaymentModal setPaymentModalShow={setPaymentModalShow}/>
					}
				</Col>
			</Row>
		</Container>
	)
}
