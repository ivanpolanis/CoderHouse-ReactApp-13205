import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



const App = () =>{
  return(
    <Fragment>
      <NavBar/>
        <ItemListContainer/>
      <ItemCount stock={8} count={1}/>
      <Footer/>
    </Fragment>
  );
}
export default App;
