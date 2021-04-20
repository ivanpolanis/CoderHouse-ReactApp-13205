import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './cart/CartWidget';
import Login from './Login';

const NavBar = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Link className='order-lg-2 font-size-1 navbar-brand' to=''>
					E-Commerce
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='text-center order-lg-1'>
					<Nav className='mr-auto'>
						<Link className='nav-link' to='/'>
							Home
						</Link>
						<Link className='nav-link' to='/shop'>
							Shop
						</Link>
						<NavDropdown title='Categories'>
							<Link className='dropdown-item' to='/shop/category/jewelery'>Jewelery</Link>
							<Link className='dropdown-item' to='/shop/category/electronics'>Electronics</Link>
							<Link className='dropdown-item' to='/shop/category/men clothing'>Men clothing</Link>
							<Link className='dropdown-item' to='/shop/category/women clothing'>Women clothing</Link>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Collapse className='order-lg-3'>
					<Nav className='ml-auto'>
						<Nav.Link data-toggle='modal'>
							<Login />
						</Nav.Link>

						<Nav.Link href=''>
							<CartWidget />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default NavBar;
