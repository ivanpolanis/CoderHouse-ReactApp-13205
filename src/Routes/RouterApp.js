import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Shop from '../views/Shop';
import Cart from '../views/Cart';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Product from '../views/Product';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Checkout from '../components/Checkout/Checkout';
import EditProfile from '../components/EditProfile/EditProfile';
import CheckoutSuccess from '../components/CheckoutSuccess/CheckoutSuccess';

const RouterApp = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path='/cart/checkout/success' component={CheckoutSuccess}/>
				<Route path='/product/:id' component={Product} />
				<Route path='/shop/:category' component={ItemListContainer} />
				<Route path='/shop' component={Shop} />
				<Route path='/cart/checkout' component={Checkout}/>
				<Route path='/cart' component={Cart} />
				<Route path='/profile/edit' component={EditProfile}/>
				<Route path='/' exact component={Home} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default RouterApp;
