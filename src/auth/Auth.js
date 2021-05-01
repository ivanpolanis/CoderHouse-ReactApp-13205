import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const initialValues = {
	displayName: '',
	email: '',
	phoneNumber: '',
	password: '',
	photoURL: '',
};
export const AuthContext = createContext();

export const Auth = (props) => {
	const [values, setValues] = useState(initialValues);
	const [user, setUser] = useState(auth.currentUser);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		console.log(values);
	};

	const signUp = async (e) => {
		
		await auth.createUserWithEmailAndPassword(values.email, values.password);
		setUser(auth.currentUser);
		setValues(initialValues);
	};

	const signIn = async (e) => {
		e.preventDefault();
		console.log('a');
		await auth.signInWithEmailAndPassword(values.email, values.password);
		setUser(auth.currentUser);
		setValues(initialValues);
	};

	const signOut = async () => {
		await auth.signOut();
		setUser(auth.currentUser);
		setValues(initialValues);
	};
	const updateUserProfile = async (e) => {
		e.preventDefault()
		try{
		await user.updateProfile({
			displayName: values.displayName,
			email: values.email,
			phoneNumber: values.phoneNumber,
			photoURL: values.photoURL,
		})} catch(e){
			console.log(e)
		}
		
	};
	useEffect(() => {
		setUser(auth.currentUser);
	}, [user]);
	return (
		<AuthContext.Provider
			value={{ values, handleOnChange, signUp, signIn, signOut, updateUserProfile, user }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
