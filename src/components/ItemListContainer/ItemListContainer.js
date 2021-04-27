import { Container, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Item from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import Axios from 'axios';
import { useParams } from 'react-router';

const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { category } = useParams();

	useEffect(() => {
		setIsLoading(true);
		if (category === undefined) {
			Axios(`https://fakestoreapi.com/products/`).then((res) => {
				setData(res.data);
				setIsLoading(false);
			}, []);
		} else {
			Axios(`https://fakestoreapi.com/products/category/${category}`).then((res) => {
				setData(res.data);
				setIsLoading(false);
			}, []);
		}
	}, [category]);
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
