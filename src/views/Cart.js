import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import CartItem from '../components/cart/CartItem'

const Cart = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
		Axios(`https://fakestoreapi.com/products?limit=1`).then((res) => {
			setData(res.data);
            console.log(res.data);
        },[]);
	}, []);
	return (
		<Container>
            <div className="cart ">
                <div className="cart-header px-3">
                    <h2>My Cart</h2>
                    <Link className='btn btn-continue ml-auto' to='/shop'>Continue shopping</Link>
                </div>
                <div className="cart-body">
                {data.map(data => <CartItem item={data} quantity={1} />)}
                </div>
                <div className="cart-footer text-right">
                    <span className='d-block font-semi-bold font-size-2'>Total: $</span>
                    <Link className='btn btn-dark'>CheckOut</Link>
                </div>
            </div>
		</Container>
	);
};

export default Cart;
