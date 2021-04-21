import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Axios from 'axios';
import CartItem from './CartItem';
import CartFooter from './CartFooter.js';

const CartWidget = () => {
	const [show, setShow] = useState(false);

	const [data, setData] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		Axios(`https://fakestoreapi.com/products?limit=1`).then((res) => {
			setData(res.data);
        },[]);
	}, []);

	return (
		<>
			<Button variant='' onClick={handleShow}>
				<i className='gg-shopping-cart'></i>
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Shopping Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{data.map(data => <CartItem key={data.id} item={data} quantity={2} />)}
				</Modal.Body>
				<Modal.Footer>
					<CartFooter close={handleClose} />
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default CartWidget;
