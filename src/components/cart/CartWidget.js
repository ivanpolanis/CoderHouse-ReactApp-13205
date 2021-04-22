import { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CartItem from './CartItem';
import CartFooter from './CartFooter.js';
import EmptyCart from '../EmptyCart';
import { CartContext } from '../../CartContext/CartProvider';

const CartWidget = () => {
	const [show, setShow] = useState(false);

	const { cart } = useContext(CartContext);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant='' onClick={handleShow}>
				<i className='gg-shopping-cart'></i>
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Shopping Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body className='pb-0'>
					{cart.length ? (
						cart.map((data) => (
							<CartItem key={data.id} item={data.item} quantity={data.quantity} />
						))
					) : (
						<EmptyCart />
					)}
				</Modal.Body>
				<Modal.Footer className='pt-0'>
					<CartFooter close={handleClose} />
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default CartWidget;
