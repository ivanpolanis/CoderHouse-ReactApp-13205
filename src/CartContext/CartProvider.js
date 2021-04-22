import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);

	const [total, setTotal] = useState(0);

	const addItem = (item, count) => {
		setCart((prev) => {
			const isItemInCart = prev.find((cart) => cart.item.id === item.id);
			let quantity = count;
			if (isItemInCart) {
				return cart.map((currentItem) =>
					currentItem.item.id === item.id
						? { item, quantity: currentItem.quantity + count }
						: currentItem,
				);
			}
			return [...prev, { item, quantity }];
		});
	};
	const removeItem = (id) => {
		setCart((prev) =>
			prev.reduce((ack, data) => {
				if (data.item.id === id) {
					return ack;
				} else {
					return [...ack, data];
				}
			}, []),
		);
	};
	const clear = () => {
		setCart([]);
	};
	useEffect(() => {
		const Total = () => {
			let total = 0;
			for (const Item of cart) {
				total = total + Item.item.price * Item.quantity;
			}
			setTotal(total.toFixed(2));
		};
		Total();
	}, [cart]);
	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clear, total }}>
			{props.children}
		</CartContext.Provider>
	);
};
