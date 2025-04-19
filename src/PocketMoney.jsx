import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, Input, Label } from 'reactstrap';

export default function PocketMoney() {
return (
	<Container className='pocket-money-container'>
	<Row>
		<Col>
		<h1>Pocket Money</h1>
		<p>Manage your pocket money with ease!</p>
		</Col>
	</Row>
	<Row>
		<Col>
		<Form>
			<Label for="amount">Amount</Label>
			<Input type="number" id="amount" placeholder="Enter amount" />
			<Button color="primary">Add</Button>
		</Form>
		</Col>
	</Row>
	</Container>
)
}
