import React, { useState, createContext } from 'react';

export const CartItemContext = createContext();

export const CartItemProvider = (props) => {
	const [cartItems, setCartItems] = useState([]);
	return (
		<CartItemContext.Provider value={[cartItems, setCartItems]}>
			{props.childen}
		</CartItemContext.Provider>
	);
};
