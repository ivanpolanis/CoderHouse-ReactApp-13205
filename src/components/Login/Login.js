import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Login = () => {
	const [showSI, setShowSI] = useState(false);
	const [showSU, setShowSU] = useState(false);

	const handleCloseSignIn = () => setShowSI(false);
	const handleShowSignIn = () => setShowSI(true);

	const handleCloseSignUp = () => setShowSU(false);
	const handleShowSignUp = () => setShowSU(true);

	return (
		<>
			<Button variant='' onClick={handleShowSignIn}>
				<span className='nav-link'>
					Sign IN
				</span>
			</Button>
            <Button variant='' onClick={handleShowSignUp}>
				<span className='nav-link'>
					Sign Up
				</span>
			</Button>

			<Modal
				show={showSI}
				onHide={handleCloseSignIn}
				className='modal-style'
				dialogClassName='modal-login'
			>
				<Modal.Header closebutton className='p-0'>
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
					<form action='' method='' className='mt-3'>
						<div className='form-group'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='fa fa-user'></i>
								</span>
								<input
									type='text'
									className='form-control'
									name='username'
									placeholder='Enter your username'
									required='required'
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
					<form action='' method='post' className='mt-3'>
						<div className='form-group'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='fa fa-user'></i>
								</span>
								<input
									type='text'
									className='form-control'
									name='name'
									placeholder='Enter your name'
									required='required'
								/>
							</div>
						</div>
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
								/>
							</div>
						</div>
						<div className='form-group'>
							<div className='input-group'>
								<span className='input-group-addon'>
									<i className='fa fa-eye-slash'></i>
								</span>
								<input
									type='password'
									className='form-control'
									name='password_confirmation'
									placeholder='Retype password'
									required='required'
									autoComplete='on'
								/>
							</div>
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
		</>
	);
};

export default Login;
