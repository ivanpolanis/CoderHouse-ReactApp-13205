import { Container, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemList = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/category/electronics')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			}, []);
	});

	return (
		<Container className='mt-4'>
			<Row>
				{data.map((data) => {
					return (
						<Item key={data.id} name={data.title} price={data.price} img={data.image} />
					);
				})}
			</Row>
		</Container>
	);
};

export default ItemList;
