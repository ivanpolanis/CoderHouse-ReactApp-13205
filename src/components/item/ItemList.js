import { Col } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ id, name, price, img }) => {
	return (
		<Col xs='12' sm='6' md='4' className='gutter-1'>
			<Link to={'/shop/'+id}>
				<div className='card card-product'>
					<figure className='card-image'>
						<a href='#!' alt='' >
							<img src={img} alt='' />
						</a>
					</figure>
					<div className='card-footer'>
						<h3 className='card-title'>{name}</h3>
						<span className='price font-semi-bold'>${price}</span>
					</div>
				</div>
			</Link>
		</Col>
	);
};

export default ItemList;
