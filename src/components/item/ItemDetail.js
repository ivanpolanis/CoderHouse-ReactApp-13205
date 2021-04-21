import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
	const [count, setCount] = useState(1);
	useEffect(() => {
		console.log(count)
	}, [count])
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
						<Link to='/cart'>
							<button className='btn btn-primary btn-block'>Finish my purchase</button>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default ItemDetail;
