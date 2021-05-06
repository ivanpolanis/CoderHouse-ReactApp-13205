import React, { useContext, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/auth/Auth';
import { CartContext } from '../../Context/CartContext/CartProvider';
import { db } from '../../firebase';
import firebase from 'firebase/app'
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CheckoutSuccess from '../CheckoutSuccess/CheckoutSuccess';

const initialValues = {
	fullName: '',
	email: '',
	address: '',
	phoneNumber: '',
};

const Checkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({});
	
	const [buyer, setBuyer] = useState(initialValues);
	const [id, setId] = useState('');
	const { user } = useContext(AuthContext);
	const { cart, clear, totalPrice, totalItems } = useContext(CartContext);

	const completeForm = async () => {
		setBuyer({ ...buyer, fullName: user.displayName, email: user.email });
	};

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setBuyer({ ...buyer, [name]: value });
	};
	const onSubmit = () => checkOut();

	const checkOut = async () => {
		let items = cart;
		const order = {
			buyer,
			items,
			date: firebase.firestore.Timestamp.fromDate(new Date()).toDate(),
			total: totalPrice,
		};
		try {
			const newOrder = await db.collection('orders').add(order);
			setId(newOrder);
			setBuyer(initialValues);
			clear();
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Container style={{ minHeight: '80vh' }}>
			{cart.length ? (
				<Row className='mt-5'>
					<Col md='4' className='order-md-2 mb-4'>
						<h4 className='d-flex justify-content-between align-items-center mb-3'>
							<span className='text-muted'>Your cart</span>
							<span className='badge badge-secondary badge-pill'>{totalItems}</span>
						</h4>
						<ul className='list-group mb-3'>
							{cart.map((data) => (
								<CheckoutItem key={data.item.id} data={data} />
							))}
							<li className='list-group-item d-flex justify-content-between'>
								<span>Total (USD)</span>
								<strong>${totalPrice}</strong>
							</li>
						</ul>
					</Col>

					<div className='col-md-8 order-md-1'>
						<h4 className='mb-3'>Billing address</h4>
						<form
							onSubmit={handleSubmit(() => {
								onSubmit();
							})}
						>
							<Row>
								<Col className='mb-3'>
									<label htmlFor='fullName'>Full name</label>
									<input
										type='text'
										className='form-control'
										id='fullName'
										placeholder='John Doe'
										{...register('fullName', {
											required: 'Valid full name is required',
										})}
										onChange={handleOnChange}
										value={buyer.fullName}
									/>
									{<div className='invalid-feedback'>Valid full name is required</div>}
								</Col>
							</Row>

							<div className='mb-3'>
								<label htmlFor='email'>Email</label>
								<input
									type='text'
									className='form-control'
									id='email'
									placeholder='you@example.com'
									{...register('email', {
										required: 'Valid email is required',
										pattern: /^\S+@\S+$/i,
									})}
									onChange={handleOnChange}
									value={buyer.email}
								/>
								{errors.email && (
									<div className='text-muted'>Valid email is required.</div>
								)}
							</div>

							<div className='mb-3'>
								<label htmlFor='address'>Address</label>
								<input
									type='text'
									className='form-control'
									id='address'
									{...register('address', {
										required: true,
										minLength: {
											value: 8,
											message: 'Valid address is required',
										},
									})}
									onChange={handleOnChange}
									placeholder='1234 Main St'
									value={buyer.address}
								/>
								{errors.address && (
									<div className='text-muted'>{errors.address.message}</div>
								)}
							</div>

							<div className='mb-3'>
								<label htmlFor='phoneNumber'>Phone Number</label>
								<div className='input-group'>
									<div className='input-group-prepend'>
										<span className='input-group-text'>+</span>
									</div>
									<input
										type='text'
										className='form-control'
										id='phoneNumber'
										placeholder='1012345679'
										{...register('phoneNumber', {
											required: true,
											pattern: /^[0-9\b]+$/i,
											minLength: {
												value: 9,
											},
										})}
										onChange={handleOnChange}
										value={buyer.phoneNumber}
									/>
								</div>
							</div>
							{errors.phoneNumber && (
								<div className='text-muted'>Valid phone number is required.</div>
							)}
							<hr className='mb-4' />
							{user != null && (
								<p
									style={{ textAlign: 'center', cursor: 'pointer', color: 'blue' }}
									onClick={completeForm}
								>
									Continue as {user.email}
								</p>
							)}
							{cart.length ? (
								<button className='btn btn-primary btn-lg btn-block' type='submit'>
									Continue to checkout
								</button>
							) : (
								<span className='btn btn-primary btn-lg btn-block disabled'>
									Continue to checkout
								</span>
							)}
						</form>
					</div>
				</Row>
			) : id !== '' ? (
				<CheckoutSuccess id={id} />
			) : (
				<Redirect to='/' />
			)}
		</Container>
	);
};

export default Checkout;
