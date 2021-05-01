import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { AuthContext } from '../../auth/Auth';

const EditProfile = () => {
	const { values, user, updateUserProfile, handleOnChange } = useContext(AuthContext);

	console.log(user);
	return user ? (
		<Container style={{ minHeight: '80vh' }}>
			<form onSubmit={updateUserProfile}>
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
							name='displayName'
							placeholder=''
							onChange={handleOnChange}
							defaultValue={user && user.displayName}
							required
						/>
						<div className='invalid-feedback'>Valid name is required.</div>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							className='form-control'
							name='email'
							placeholder=''
							onChange={handleOnChange}
							defaultValue={user && user.email}
							required
						/>
						<div className='invalid-feedback'>Valid email is required.</div>
						{/* {<label htmlFor='phoneNumber'>Phone</label>
						<input
							type='text'
							className='form-control'
							name='phoneNumber'
							placeholder=''
							onChange={handleOnChange}
							defaultValue={user && user.phoneNumber}
							required
						/>
						<div className='invalid-feedback'>Valid phone is required.</div>} */}
						<label htmlFor='photoURL'>URL Photo</label>
						<input
							type='text'
							className='form-control'
							name='photoURL'
							placeholder=''
							onChange={handleOnChange}
							defaultValue={user ? user.photoURL : values.photoURL}
							required
						/>
						<div className='invalid-feedback'>Valid photoURL is required.</div>
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
