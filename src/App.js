import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import ItemListContainer from './components/item/ItemListContainer';
import ItemDetailContainer from './components/item/ItemDetailContainer';


const App = () =>{
  return(
    <Fragment>
      <NavBar/>
        <ItemListContainer/>
      <ItemDetailContainer/>
      <Footer/>
    </Fragment>
  );
}
export default App;
