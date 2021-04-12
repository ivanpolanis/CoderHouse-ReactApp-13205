import { Container, Row, Col } from 'react-bootstrap';
import ItemCounter from './ItemCount';

const ItemDetail = ({ name, price, category, description, img }) => {
	return (
		<div className='item-detail-view'>
			<Container className='detail-item'>
				<Row>
					<Col md='8'>
						<div className='detail-img'>
							<img src={img} alt='' className='img' />
						</div>
					</Col>
					<Col md='4'>
						<h2>{name}</h2>
						<span className='font-semi-bold'>${price}</span>
						<p>{description}</p>
						<ItemCounter/>
						<button className='btn btn-primary btn-block'>Add to cart</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default ItemDetail;
