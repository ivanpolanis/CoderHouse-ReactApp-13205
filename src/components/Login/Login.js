import React, { useState, Fragment} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Login = ({ signIn, signUp, handleOnChange, values }) => {
	const { register, handleSubmit, formState: { errors } } = useForm({});


	const [showSI, setShowSI] = useState(false);
	const [showSU, setShowSU] = useState(false);

	const handleCloseSignIn = () => setShowSI(false);
	const handleShowSignIn = () => setShowSI(true);

	const handleCloseSignUp = () => setShowSU(false);
	const handleShowSignUp = () => setShowSU(true);

	return (
		<Fragment>
			<Button variant='' style={{ boxShadow: 'none' }} onClick={handleShowSignIn}>
				<span className='nav-link'>Sign IN</span>
			</Button>
			<Button variant='' style={{ boxShadow: 'none' }} onClick={handleShowSignUp}>
				<span className='nav-link'>Sign Up</span>
			</Button>

			<Modal
				show={showSI}
				onHide={handleCloseSignIn}
				className='modal-style'
				dialogClassName='modal-login'
			>
				<Modal.Header className='p-0'>
					<h4 className='modal-title'>Login</h4>
					<button
						type='button'
						className='close'
						data-dismiss='modal'
						aria-hidden='true'
						onClick={handleCloseSignIn}
					>
						&times;
					</button>
				</Modal.Header>
				<Modal.Body>
					<form
						action=''
						method=''
						className='mt-3'
						onSubmit={(e) => {
							signIn(e);
							handleCloseSignIn();
						}}
					>
						<div className='form-group'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='fa fa-user'></i>
								</span>
								<input
									type='text'
									className='form-control'
									name='email'
									placeholder='Enter email address'
									required='required'
									onChange={handleOnChange}
									value={values.email}
								/>
							</div>
						</div>
						<div className='form-group'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='fa fa-lock'></i>
								</span>
								<input
									type='password'
									className='form-control'
									name='password'
									placeholder='Enter password'
									required='required'
									autoComplete='on'
									onChange={handleOnChange}
									value={values.password}
								/>
							</div>
						</div>
						<div className='row pl-1 pr-1'>
							<div className='col text-left'>
								<label className='custom-control custom-checkbox'>
									<input
										type='checkbox'
										className='custom-control-input'
										id='item_checkbox'
										name='item_checkbox'
										value='option1'
									/>
									<span className='custom-control-label'>&nbsp;Remember Me</span>
								</label>
							</div>
							<div className='col text-right hint-text pt-0'>
								<a href='#!' className='text-danger'>
									Forgot Password?
								</a>
							</div>
						</div>
						<div className='form-group text-center mt-2 mb-0'>
							<button type='submit' className='btn btn-primary btn-sm'>
								Login
							</button>
						</div>
						<p className='hint-text mt-0'>or login with</p>
						<div className='social-login text-center'>
							<a className=' btn-facebook  text-uppercase' href='redirect/facebook'>
								<i className='gg-facebook mr-2 ml-2'></i>{' '}
							</a>
							<a className=' btn-facebook  text-uppercase' href='redirect/google'>
								<i className='gg-google mr-2 ml-2'></i>
							</a>
							<a className=' btn-facebook  text-uppercase' href='redirect/twitter'>
								<i className='gg-twitter mr-2 ml-2'></i>
							</a>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					Don't have an account?{' '}
					<a
						href='#registerModal'
						data-dismiss='modal'
						data-toggle='modal'
						onClick={() => {
							handleShowSignUp();
							handleCloseSignIn();
						}}
					>
						{' '}
						Register
					</a>
				</Modal.Footer>
			</Modal>
			<Modal
				show={showSU}
				onHide={handleCloseSignUp}
				className='modal-style'
				dialogClassName='modal-login'
			>
				<Modal.Header>
					<h4 className='modal-title'>Register</h4>
					<button
						type='button'
						className='close'
						data-dismiss='modal'
						aria-hidden='true'
						onClick={handleCloseSignUp}
					>
						&times;
					</button>
				</Modal.Header>
				<Modal.Body>
					<form
						action=''
						method='post'
						className='mt-3'
						onSubmit={handleSubmit((e) => {
							signUp(e);
							handleCloseSignUp();
						})}
					>
						<div className='form-group'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='fa fa-envelope'></i>
								</span>
								<input
									type='text'
									className='form-control'
									name='email'
									placeholder='Enter email address'
									required='required'
									onChange={handleOnChange}
									value={values.email}
								/>
							</div>
						</div>
						<div className='form-group'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='fa fa-lock'></i>
								</span>
								<input
									type='password'
									className='form-control'
									placeholder='Enter password'
									{...register('password',{
										required: 'You must specify a password',
										minLength: {
											value: 8,
											message: 'Password must have at least 8 characters',
										},
									})}
									autoComplete='on'
									onChange={handleOnChange}
								/>
								
							</div>
							{errors.password && <span style={{textAlign:'center',display:'block'}}>{errors.password.message}</span>}
						</div>
						<div className='form-group'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='fa fa-eye-slash'></i>
								</span>
								<input
									type='password'
									className='form-control'
									placeholder='Retype password'
									{...register('password_confirmation',{
										validate: (value) =>
											value === values.password || 'The passwords do not match',
									})}
									autoComplete='on'
								/>
								
							</div>
							{errors.password_confirmation && <span style={{textAlign:'center',display:'block'}}>{errors.password_confirmation.message}</span>}
						</div>

						<div className='form-group text-center'>
							<button id='signup-button' type='submit' className='btn btn-primary btn-sm'>
								Register
							</button>
						</div>
					</form>
				</Modal.Body>
				<p className='hint-text'>or register with</p>
				<div className='social-login text-center mb-2'>
					<a className=' btn-facebook  text-uppercase' href='redirect/facebook'>
						<i className='gg-facebook mr-2 ml-2'></i>{' '}
					</a>
					<a className=' btn-facebook  text-uppercase' href='redirect/google'>
						<i className='gg-google mr-2 ml-2'></i>
					</a>
					<a className=' btn-facebook  text-uppercase' href='redirect/twitter'>
						<i className='gg-twitter mr-2 ml-2'></i>
					</a>
				</div>
				<Modal.Footer>
					Already have an account?{' '}
					<a
						href='#!'
						data-dismiss='modal'
						data-toggle='modal'
						onClick={() => {
							handleShowSignIn();
							handleCloseSignUp();
						}}
					>
						{' '}
						Login
					</a>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
};

export default Login;
