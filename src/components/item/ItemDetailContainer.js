import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import Loader from '../Loader';
import Axios from 'axios';

const ItemDetailContainer = () => {
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
		<div>{isLoading ? <Loader /> : <ItemDetail key={product.id} item={product} />}</div>
	);
};
export default ItemDetailContainer;
