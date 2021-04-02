import { Container } from 'react-bootstrap';
import React from 'react';

const ItemListContainer = ({greeting}) =>{
    return(
        <Container className='text-center item-list'>
            <p>{greeting}</p>
        </Container>
    );
};

export default ItemListContainer;