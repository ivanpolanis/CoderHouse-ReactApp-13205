import React from 'react';

const CheckoutItem = ({ data }) => {
	return (
		<li class='list-group-item d-flex justify-content-between lh-condensed'>
			<div>
				<h6 class='my-0'>{data.item.title}</h6>
				<small class='text-muted'>
					{data.item.description.length > 80
						? `${data.item.description.substring(0, 80)}...`
						: data.item.description}
				</small>
			</div>
			<span class='text-muted'>${data.quantity * data.item.price}</span>
		</li>
	);
};

export default CheckoutItem;
