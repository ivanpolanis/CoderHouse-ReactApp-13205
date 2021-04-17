import React from 'react';


const ItemHome = ({ title, price, img }) => {
	return (
		<div className='col-md-4'>
			<div className='thumb-wrapper'>
				<div className='img-box'>
					<img src={img} className='img-fluid' alt='' />
				</div>
				<div className='thumb-content'>
					<h4>{title}</h4>
					<p className='item-price'>
						<strike>${price + price * 0.3}</strike> <span>${price}</span>
					</p>
					<a href='#!' className='btn btn-home'>
						Add to Cart
					</a>
				</div>
			</div>
		</div>
	);
};

export default ItemHome;
