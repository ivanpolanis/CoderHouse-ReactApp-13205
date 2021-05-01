import React from 'react';
import './App.css';
import RouterApp from './Routes/RouterApp'
import { CartProvider } from './CartContext/CartProvider';
import {Auth} from './auth/Auth'

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
