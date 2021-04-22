import React from 'react';
import './App.css';
import RouterApp from './Routes/RouterApp'
import { CartProvider } from './CartContext/CartProvider';

const App = () => {
	return (
		<CartProvider>
			<RouterApp/>
		</CartProvider>
	);
};
export default App;
