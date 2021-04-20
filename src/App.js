import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import Product from './views/Product';
import ItemListContainer from './components/item/ItemListContainer';


const App = () => {
	return (
    <Router>
      <Fragment>
        <NavBar />
          <Switch>
          <Route path='/product/:product' component={Product}/>
          <Route path='/shop/category/:category' component={ItemListContainer}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/' exact component={Home}/>
          <Route path='/category'/>
          </Switch>
        <Footer />
      </Fragment>
    </Router>
	);
};
export default App;
