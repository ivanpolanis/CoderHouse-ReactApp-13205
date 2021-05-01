import React from 'react';
import { Card, Container } from 'react-bootstrap';


const CheckoutSuccess = ({ id }) => {
	return (
		<Container style={{height:'80vh'}} className='order'>
			<Card className='mt-4'>
				<Card.Header>
					<h2 className='text-center'>Order Succesful</h2>
				</Card.Header>
				<Card.Body >
					<Card.Text>Order ID:{id.id}</Card.Text>
					<Card.Text>
						Your purchase was successful. With the order id you will be able to follow the
						shipment of your package.
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default CheckoutSuccess;
