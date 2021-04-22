import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { CartContext } from '../../CartContext/CartProvider';

const ItemDetail = ({ item }) => {
	const { addItem } = useContext(CartContext);
	const [count, setCount] = useState(1);

	const onAdd = (e) => {
		setCount(e);
	};

	return (
		<div className='item-detail-view'>
			<Container className='detail-item'>
				<Row>
					<Col md='8'>
						<div className='detail-img'>
							<img src={item.image} alt='' className='img' />
						</div>
					</Col>
					<Col md='4'>
						<h2>{item.title}</h2>
						<span className='font-semi-bold'>${item.price}</span>
						<p>{item.description}</p>
						<ItemCount onAdd={onAdd} />
						<button
							className='btn btn-primary btn-block'
							onClick={() => addItem(item, count)}
						>
							Add to cart
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default ItemDetail;
