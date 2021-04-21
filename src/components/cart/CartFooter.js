import React from 'react';
import { Link } from 'react-router-dom';

const CartFooter = ({ close }) => {
	return (
		<div className='cart-footer text-center p5'>
			<div className='mb-3'>
				<span className='d-block font-semi-bold'>Total</span>
				<span className='d-block'>$59.99</span>
			</div>
			<div className='mb-2'>
				<Link className='btn btn-dark' to='/cart' onClick={close}>
                    Checkout
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