import { Carousel } from 'react-bootstrap';
import ph from '../assets/placeholder.jpg';

const CarouselHome = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={ph}
					alt='First slide'
					style={{ height: '60vh', objectFit: 'cover' }}
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={ph}
					alt='Second slide'
					style={{ height: '60vh', objectFit: 'cover' }}
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={ph}
					alt='Third slide'
					style={{ height: '60vh', objectFit: 'cover' }}
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
export default CarouselHome;
