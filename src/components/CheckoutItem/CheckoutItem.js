import React from 'react';

const CheckoutItem = ({ data }) => {
	return (
		<li className='list-group-item d-flex justify-content-between lh-condensed'>
			<div>
				<h6 className='my-0'>{data.item.title}</h6>
				<small className='text-muted'>
					{data.item.description.length > 80
						? `${data.item.description.substring(0, 80)}...`
						: data.item.description}
				</small>
			</div>
			<span className='text-muted'>${data.quantity * data.item.price}</span>
		</li>
	);
};

export default CheckoutItem;
