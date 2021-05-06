import React from 'react';
import './App.css';
import RouterApp from './Routes/RouterApp'
import { CartProvider } from './Context/CartContext/CartProvider';
import {Auth} from './Context/auth/Auth'

const App = () => {
	return (
		<Auth>
		<CartProvider>
			<RouterApp/>
		</CartProvider>
		</Auth>
	);
};
export default App;
