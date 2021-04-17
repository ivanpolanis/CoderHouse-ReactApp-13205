import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Axios from 'axios';
import ItemDetail from '../components/item/ItemDetail';
import Loader from '../components/Loader';

function Product() {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const id = useParams();
	useEffect(() => {
		setIsLoading(true);
		Axios.get(`https://fakestoreapi.com/products/${id.product}`).then((res) => {
			setProduct(res.data);
			setIsLoading(false);
		});
	}, [id]);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<ItemDetail
					key={product.id}
					name={product.title}
					price={product.price}
					description={product.description}
					img={product.image}
					category={product.category}
				/>
			)}
		</div>
	);
}

export default Product;
