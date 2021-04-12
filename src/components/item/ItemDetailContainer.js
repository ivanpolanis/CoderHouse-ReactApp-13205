import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/category/electronics')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			}, []);
	});
	return (
		<>
			{data.map((data) => {
				return (
					<ItemDetail
						key={data.id}
						name={data.title}
						price={data.price}
						description={data.description}
						img={data.image}
						category={data.category}
					/>
				);
			})}
		</>
	);
};
export default ItemDetailContainer;
