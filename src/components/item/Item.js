import { Col } from 'react-bootstrap';
import React from 'react';

const Item = ({ name, price, img }) => {
	return (
		<Col xs='6' md='4' className='gutter-1'>
			<div className='card card-product'>
				<figure className='card-image'>
					<a href='#!'>
						<img src={img} alt='' />
					</a>
				</figure>
				<div className='card-footer'>
					<h3 className='card-title'>{name}</h3>
					<span className='price font-semi-bold'>${price}</span>
				</div>
			</div>
		</Col>
	);
};

export default Item;
