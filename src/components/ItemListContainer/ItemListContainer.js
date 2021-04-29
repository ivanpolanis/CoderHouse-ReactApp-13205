import { Container, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Item from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';
import { db } from '../../firebase';

const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { category } = useParams();

	useEffect(() => {
		const getData = async () => {
			let ref = '';
			category
				? (ref = db.collection('items').where('category', '==', category))
				: (ref = db.collection('items'));
	
			ref.onSnapshot((querySnapshot) => {
				const docs = [];
				querySnapshot.forEach((doc) => {
					docs.push({ id: doc.id, ...doc.data() });
					setIsLoading(false);
				});
				setData(docs);
			});
		};
		setIsLoading(true);
		getData();
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
