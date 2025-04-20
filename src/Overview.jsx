import React from 'react';
import {
	Modal, ModalHeader, ModalBody, ModalFooter,
	Button, Table
} from 'reactstrap';

export default function Overview({ transactions, setOverviewModal }) {
  return (
	<Modal scrollable isOpen={true} className='overview-modal'>
		<ModalHeader>Übersicht Transaktionen</ModalHeader>
			<ModalBody>
				<Table>
					<thead>
						<tr className='text-end'>
							<th>
								Datum
							</th>
							<th>
								Betrag
							</th>
							<th>
								Notiz
							</th>
						</tr>
					</thead>
					{transactions && transactions.length > 0 && transactions.map((transaction) => (
					<tbody key={transaction.id} >
						<tr className='text-end'>
							<td>
								{transaction?.timestamp && new Date(transaction?.timestamp).toLocaleDateString('de-DE', {
									year: 'numeric',
									month: '2-digit',
									day: '2-digit'
								})}
							</td>
							<td>
								{transaction?.amount}
							</td>
							<td>
								{transaction?.note}
							</td>
						</tr>
					</tbody>))}
				</Table>
			</ModalBody>
			<ModalFooter>
				<Button onClick={() => setOverviewModal(false)} color='secondary'>Schließen</Button>
			</ModalFooter>
	</Modal>
  )
}
