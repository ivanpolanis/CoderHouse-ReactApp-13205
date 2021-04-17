import { Container, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Item from './ItemList';
import Loader from '../Loader';
import Axios from 'axios';

const ItemListContainer = (props) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		Axios('https://fakestoreapi.com/products/category/electronics').then((res) => {
			setData(res.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<Container className='mt-4'>
			<Row>
				{isLoading ? (
					<Loader />
				) : (
					data.map((data) => (
						<Item
							key={data.id}
							id={data.id}
							name={data.title}
							price={data.price}
							img={data.image}
						/>
					))
				)}
			</Row>
		</Container>
	);
};

export default ItemListContainer;
