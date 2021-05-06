import React, { useState, useEffect } from 'react';
import ItemHome from '../ItemHome/ItemHome';
import { db } from '../../firebase';
import CarouselHome from '../Carousel/Carousel';

const ItemHomeContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			db.collection('items')
				.limit(6)
				.onSnapshot((querySnapshot) => {
					const docs = [];
					querySnapshot.forEach((item) => docs.push({ id: item.id, ...item.data() }));
					setData(docs);
				});
		};
		getItems();
	}, []);
	return (
		<div>
			<CarouselHome data={data.slice(0, 3)} />
			<div className='container'>
				<div className='row home-products'>
					{data.slice(3, 6).map((data) => (
						<ItemHome
							key={data.id}
							id={data.id}
							title={data.title}
							price={data.price}
							img={data.image}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ItemHomeContainer;
