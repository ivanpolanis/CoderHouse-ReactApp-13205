import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import CartItem from './CartItem';
import CartFooter from './CartFooter.js';

const CartWidget = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button variant='' onClick={handleShow}>
                <i className="gg-shopping-cart"></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CartItem/>
                </Modal.Body>
                <Modal.Footer>
                    <CartFooter close={handleClose}/>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default CartWidget;
