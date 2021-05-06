import React from 'react';
import { Link } from 'react-router-dom';

const ItemHome = ({ title, id, price, img }) => {
	return (
		<div className='col-md-4'>
			<div className='thumb-wrapper'>
				<div className='img-box'>
					<img src={img} className='img-fluid' alt='' />
				</div>
				<div className='thumb-content'>
					<h4>{title ? title : 'Product'}</h4>
					<p className='item-price'>
						<strike>${(price + price * 0.3).toFixed(2)}</strike> <span>${price}</span>
					</p>

					<Link className='btn btn-home' to={`/product/${id}`}>
						Go to product
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ItemHome;
