import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartProvider';

const CartItem = ({ item, quantity }) => {
	const { removeItem } = useContext(CartContext);
	return (
		<div className='item-container'>
			<div className='cart-item'>
				<div className='item-img mr-3'>
					<img src={item.image} alt='' className='img-fluid rounded' />
				</div>
				<div className='item-description'>
					<div className='d-flex justify-content-between align-items-center'>
						<span className='d-block font-semi-bold font-size-2'>{item.title}</span>
						<button type='button' className='btn btn-remove' onClick={() => removeItem()}>
							<i className='gg-trash'></i>
						</button>
					</div>
					<span className='d-block font-size-4 pr-4'>
						{item.description.length > 80
							? `${item.description.substring(0, 60)}...`
							: item.description}
					</span>
					<span className='d-block text-muted font-size-5'>Quantity:{quantity}</span>
					<span className='d-block text-primary font-semi-bold'>
						${item.price * quantity}
					</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
