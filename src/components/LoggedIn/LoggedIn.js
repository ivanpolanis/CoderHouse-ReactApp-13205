import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const LoggedIn = ({ signOut, photoURL }) => {
	const [show, setShow] = useState(false);
	const showDropdown = (e) => {
		setShow(!show);
	};
	const hideDropdown = (e) => {
		setShow(false);
	};
	const navDropdownTitle = (
		photoURL ? <img
			src={photoURL}
			width='40'
			height='40'
			className='rounded-circle'
            alt='userphoto'
		/> : <img
			src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
			width='40'
			height='40'
			className='rounded-circle'
            alt='userphoto'
		/>
	);
	return (
		<NavDropdown
			title={navDropdownTitle}
			id='collasible-nav-dropdown'
			show={show}
			onMouseEnter={showDropdown}
			onMouseLeave={hideDropdown}
		>
			<Link className='dropdown-item' to='/profile/edit'>Edit Profile</Link>
			<NavDropdown.Item onClick={signOut}>Log Out</NavDropdown.Item>
		</NavDropdown>
	);
};

export default LoggedIn;
