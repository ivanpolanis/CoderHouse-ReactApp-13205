import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ph from '../../assets/placeholder.jpg';

const CarouselHome = ({ data }) => {



	return (
		<Carousel>
			{data.length ? data.map((item) => {
				return (
					<Carousel.Item key={item.id}>
						<img
							className='d-block w-100'
							src={item.image}
							alt=''
							style={{ height: '60vh', objectFit: 'contain' }}
						/>
						<Carousel.Caption>
							<Link to={`/product/${item.id}`}><h3 style={{color:'white',fontWeight: 600,textShadow: '1px 2px 2px black'}}>{item.title}</h3></Link>
						</Carousel.Caption>
					</Carousel.Item>
				);
			}) : 
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={ph}
							alt=''
							style={{ height: '60vh', objectFit: 'cover' }}
						/>
						<Carousel.Caption>
							
						</Carousel.Caption>
					</Carousel.Item>
				}
			
		</Carousel>
	);
};
export default CarouselHome;
