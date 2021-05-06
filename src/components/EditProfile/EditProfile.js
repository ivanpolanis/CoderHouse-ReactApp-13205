import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { AuthContext } from '../../Context/auth/Auth';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
	const { values, user, updateUserProfile, handleOnChange } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({});
	return user ? (
		<Container style={{ minHeight: '80vh' }}>
			<form onSubmit={handleSubmit(updateUserProfile)}>
				<Row style={{ minHeight: '400px' }}>
					<Col md='4' className='order-md-2 profile-photo '>
						<h3 className='mt-2'>Photo</h3>
						<img src={user && user.photoURL} alt='' className='photo' />
					</Col>
					<Col md='8' className='mt-3'>
						<label htmlFor='displayName'>Full Name</label>
						<input
							type='text'
							className='form-control'
							placeholder='John Doe'
							onChange={handleOnChange}
							defaultValue={user && user.displayName}
							{...register('displayName', {
								required: true,
							})}
						/>
						<div className='invalid-feedback'>Valid name is required.</div>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							className='form-control'
							onChange={handleOnChange}
							defaultValue={user && user.email}
							{...register('email', {
								required: 'Valid email is required',
								pattern: /^\S+@\S+$/i,
							})}
						/>
						{errors.email && <div className='text-muted'>Valid email is required.</div>}
						<label htmlFor='photoURL'>URL Photo</label>
						<input
							type='text'
							className='form-control'
							onChange={handleOnChange}
							defaultValue={user ? user.photoURL : values.photoURL}
							{...register('photoURL', {
								required: true,
							})}
						/>
						{errors.photoURL && (
							<div className='text-muted'>Valid photoURL is required.</div>
						)}
						<Button className='my-3' type='submit'>
							Save Changes
						</Button>
					</Col>
				</Row>
			</form>
		</Container>
	) : (
		<Redirect to='/' />
	);
};

export default EditProfile;
