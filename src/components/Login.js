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
					<h4 class='modal-title'>Login</h4>
					<button
						type='button'
						class='close'
						data-dismiss='modal'
						aria-hidden='true'
						onClick={handleCloseSignIn}
					>
						&times;
					</button>
				</Modal.Header>
				<Modal.Body>
					<form action='' method='' class='mt-3'>
						<div class='form-group'>
							<div class='input-group'>
								<span class='input-group-addon'>
									<i class='fa fa-user'></i>
								</span>
								<input
									type='text'
									class='form-control'
									name='username'
									placeholder='Enter your username'
									required='required'
								/>
							</div>
						</div>
						<div class='form-group'>
							<div class='input-group'>
								<span class='input-group-addon'>
									<i class='fa fa-lock'></i>
								</span>
								<input
									type='password'
									class='form-control'
									name='password'
									placeholder='Enter password'
									required='required'
									autocomplete='on'
								/>
							</div>
						</div>
						<div class='row pl-1 pr-1'>
							<div class='col text-left'>
								<label class='custom-control custom-checkbox'>
									<input
										type='checkbox'
										class='custom-control-input'
										id='item_checkbox'
										name='item_checkbox'
										value='option1'
									/>
									<span class='custom-control-label'>&nbsp;Remember Me</span>
								</label>
							</div>
							<div class='col text-right hint-text pt-0'>
								<a href='#!' class='text-danger'>
									Forgot Password?
								</a>
							</div>
						</div>
						<div class='form-group text-center mt-2 mb-0'>
							<button type='submit' class='btn btn-primary btn-sm'>
								Login
							</button>
						</div>
						<p class='hint-text mt-0'>or login with</p>
						<div class='social-login text-center'>
							<a class=' btn-facebook  text-uppercase' href='redirect/facebook'>
								<i class='gg-facebook mr-2 ml-2'></i>{' '}
							</a>
							<a class=' btn-facebook  text-uppercase' href='redirect/google'>
								<i class='gg-google mr-2 ml-2'></i>
							</a>
							<a class=' btn-facebook  text-uppercase' href='redirect/twitter'>
								<i class='gg-twitter mr-2 ml-2'></i>
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
					<h4 class='modal-title'>Register</h4>
					<button
						type='button'
						class='close'
						data-dismiss='modal'
						aria-hidden='true'
						onClick={handleCloseSignUp}
					>
						&times;
					</button>
				</Modal.Header>
				<Modal.Body>
					<form action='' method='post' class='mt-3'>
						<div class='form-group'>
							<div class='input-group'>
								<span class='input-group-addon'>
									<i class='fa fa-user'></i>
								</span>
								<input
									type='text'
									class='form-control'
									name='name'
									placeholder='Enter your name'
									required='required'
								/>
							</div>
						</div>
						<div class='form-group'>
							<div class='input-group'>
								<span class='input-group-addon'>
									<i class='fa fa-envelope'></i>
								</span>
								<input
									type='text'
									class='form-control'
									name='email'
									placeholder='Enter email address'
									required='required'
								/>
							</div>
						</div>
						<div class='form-group'>
							<div class='input-group'>
								<span class='input-group-addon'>
									<i class='fa fa-lock'></i>
								</span>
								<input
									type='password'
									class='form-control'
									name='password'
									placeholder='Enter password'
									required='required'
									autocomplete='on'
								/>
							</div>
						</div>
						<div class='form-group'>
							<div class='input-group'>
								<span class='input-group-addon'>
									<i class='fa fa-eye-slash'></i>
								</span>
								<input
									type='password'
									class='form-control'
									name='password_confirmation'
									placeholder='Retype password'
									required='required'
									autocomplete='on'
								/>
							</div>
						</div>

						<div class='form-group text-center'>
							<button id='signup-button' type='submit' class='btn btn-primary btn-sm'>
								Register
							</button>
						</div>
					</form>
				</Modal.Body>
				<p class='hint-text'>or register with</p>
				<div class='social-login text-center mb-2'>
					<a class=' btn-facebook  text-uppercase' href='redirect/facebook'>
						<i class='gg-facebook mr-2 ml-2'></i>{' '}
					</a>
					<a class=' btn-facebook  text-uppercase' href='redirect/google'>
						<i class='gg-google mr-2 ml-2'></i>
					</a>
					<a class=' btn-facebook  text-uppercase' href='redirect/twitter'>
						<i class='gg-twitter mr-2 ml-2'></i>
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
