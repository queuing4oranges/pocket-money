import React from 'react';
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';


export default function ToastAlert({ setShowToast }) {
	return (
		<div className='position-fixed top-0 end-0 p-3' style={{ zIndex: 9999 }}>
			<Toast>
				<ToastHeader icon='danger'>&#x1F921; HA HAAA! &#x1F921;</ToastHeader>
				<ToastBody className='d-flex flex-column justify-content-center'>
					<h5 className='text-center'>Falsches Passwort alter, dicker Bruder!</h5>
					<div className='d-flex justify-content-center my-3'>
						<Button onClick={() => setShowToast(false)} color='warning'>OK, MIST!</Button>
					</div>
				</ToastBody>
			</Toast>
		</div>
	)
}
