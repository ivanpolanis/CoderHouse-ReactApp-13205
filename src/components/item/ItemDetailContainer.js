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
						data={data}
					/>
				);
			})}
		</>
	);
};
export default ItemDetailContainer;
