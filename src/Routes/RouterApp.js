import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Shop from '../views/Shop';
import Cart from '../views/Cart';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Product from '../views/Product';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const RouterApp = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path='/product/:product' component={Product} />
				<Route path='/shop/category/:category' component={ItemListContainer} />
				<Route path='/shop' component={Shop} />
				<Route path='/cart' component={Cart} />
				<Route path='/' exact component={Home} />
				<Route path='/category' />
			</Switch>
			<Footer />
		</Router>
	);
};

export default RouterApp;
