import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartProvider';

const CartFooter = ({ close }) => {
	const { cart, clear, total } = useContext(CartContext);
	return (
		<div className='cart-footer text-center pt-0 mt-0'>
			<div className='clear-cart'>
				{cart.length ? (
					<button className='btn btn-dark' onClick={clear}>
						Clear cart
					</button>
				) : null}
			</div>
			<div className='mt-3 mb-3'>
				<span className='d-block font-semi-bold'>Total</span>
				<span className='d-block'>${total}</span>
			</div>
			<div className='mb-2'>
				<Link className='btn btn-dark' to='/cart' onClick={close}>
					Go to cart
				</Link>
			</div>
			<span>
				<a href='#/' className='text-muted font-size-6' onClick={close}>
					Continue Shopping
				</a>
			</span>
		</div>
	);
};

export default CartFooter;
