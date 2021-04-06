import { Container, Row } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import Item from './Item';
import datajson from '../data/data.json';



const ItemList = (props) =>{
    const [data,setData] = useState([]);
    
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products/category/electronics?limit=3')
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log('1')
        //         setData(data);
        //     })
        setTimeout(() => {
            setData(datajson);
            console.log('Readed')
        }, 2000)   
    });
            
            

    return(
        <Container className='mt-4'>
            <Row>
                {data.map((data) => {
                    return <Item key={data.id} name={data.title} price={data.price} img={data.image}/>
                })}
            </Row>
        </Container>
    );
};

export default ItemList;