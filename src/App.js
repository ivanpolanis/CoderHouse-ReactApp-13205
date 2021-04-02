import React, {Fragment} from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import ItemListContainer from './components/ItemListContainer';



const App = () =>{
  return(
    <Fragment>
      <NavBar/>
      <ItemListContainer greeting='This is an example.'/>
      <Footer/>
    </Fragment>
  );
}
export default App;
