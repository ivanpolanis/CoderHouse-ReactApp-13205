import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);

	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const [loaded, setLoaded] = useState(1);

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
		const getLocalStorage = () => {
			let cartArray = localStorage.getItem('cart');
			if (cartArray != null) {
				let aux = JSON.parse(cartArray);
				for (const i of aux) {
					setCart((prev) => [...prev, { ...i, ...i.quantity }])
				}
				
			}
		};
		if (loaded) {
			getLocalStorage();
			setLoaded(0);
		}
		const Total = () => {
			let totalPrice = 0;
			let totalItems = 0;
			for (const Item of cart) {
				totalPrice = totalPrice + Item.item.price * Item.quantity;
				totalItems += Item.quantity;
			}
			setTotalItems(totalItems);
			setTotalPrice(totalPrice.toFixed(2));
			localStorage.setItem('cart', JSON.stringify(cart));
		};

		Total();
	}, [cart,loaded]);

	return (
		<CartContext.Provider
			value={{ cart, addItem, removeItem, clear, totalPrice, totalItems }}
		>
			{props.children}
		</CartContext.Provider>
	);
};
