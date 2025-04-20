import React, { useState, useEffect } from 'react';
import {
	Container, Row, Col,
	Button,
	Card, CardHeader, CardBody
} from 'reactstrap';

import './pocketmoney.scss';
import PasswordModal from './PasswordModal';
import PaymentModal from './PaymentModal';
import Overview from './Overview';
import ToastAlert from './ToastAlert';
import { apiClient } from '../api';

export default function PocketMoney() {
	const [passwordModal, setPasswordModal] = useState(false);
	const [paymentModalShow, setPaymentModalShow] = useState(false);
	const [overviewModal, setOverviewModal] = useState(false);
	const [password, setPassword] = useState('');
	const [showToast, setShowToast] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [totalSum, setTotalSum] = useState(0);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		getTransactions();
	}
	, [success])

	const getTransactions = async () => {
		try {
			const response = await apiClient.get('/transactions/read.php');
			if(response.status !== 200) {
				throw new Error(`Something went wrong. Response status: ${response.status}`);
			}

			setTransactions(response.data);

			// Calculate the total sum of transactions
			const sum = response.data.reduce((acc, transaction) => {
				return acc + parseFloat(transaction.amount);
			}
			, 0);
			setTotalSum(sum);
		} catch {
			console.error('Could not retrieve events');
		}
	};

	return (
		<Container fluid className='h-100 w-100 pocket-money-container d-flex flex-column justify-content-center align-items-center'>
			<Row>
				<Col className='d-flex flex-column justify-content-center align-items-center'>
					<Card className='p-5'>
						<CardHeader>
							<h1>Miquels Budget</h1>
						</CardHeader>
						<CardBody className='d-flex flex-column justify-content-center align-items-center'>
							<h5>Verfügbarer Betrag</h5>
							<h2 className='my-3'>{totalSum && `€ ${totalSum.toFixed(2)}`}</h2>
							<Button onClick={() => setPasswordModal(true)} className='my-3' color='info'>Einzahlung/Auszahlung</Button>
						</CardBody>
					</Card>
					<Button className='trans-btn' color='warning' onClick={() => setOverviewModal(true)}>Übersicht Transaktionen</Button>
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
						<PaymentModal setPaymentModalShow={setPaymentModalShow} setSuccess={setSuccess}/>
					}
					{overviewModal &&
						<Overview transactions={transactions} setOverviewModal={setOverviewModal} />
					}
				</Col>
			</Row>
		</Container>
	)
}
