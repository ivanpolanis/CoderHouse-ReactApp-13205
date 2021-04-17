import React, { useState, useEffect } from 'react';
import ItemHome from './ItemHome';
import Axios from 'axios';

const ItemHomeContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		Axios.get(
			'https://fakestoreapi.com/products/category/electronics?limit=3',
		).then((res) => setData(res.data));
	}, []);
	return (
		<div className='container'>
			<div className='row home-products'>
				{data.map((data) => (
					<ItemHome
						key={data.id}
						title={data.title}
						price={data.price}
						img={data.image}
					/>
				))}
			</div>
		</div>
	);
};

export default ItemHomeContainer;
