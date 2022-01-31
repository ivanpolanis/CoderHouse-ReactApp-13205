import { useContext } from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/auth/Auth'
import { CartContext } from '../../Context/CartContext/CartProvider'
import CartWidget from '../CartWidget/CartWidget'
import LoggedIn from '../LoggedIn/LoggedIn'
import Login from '../Login/Login'

const NavLinks = [
	{ name: 'Jewelery', link: '/shop/jewelery' },
	{ name: 'Electronics', link: '/shop/electronics' },
	{ name: 'Men Clothing', link: '/shop/men' },
	{ name: 'Women Clothing', link: '/shop/women' },
]

const NavBar = () => {
	const { cart } = useContext(CartContext)
	const {
		user,
		handleOnChange,
		signIn,
		signUp,
		values,
		signOut,
		authWithProvider,
	} = useContext(AuthContext)
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Link className='order-lg-2 font-size-1 navbar-brand' to=''>
					Shop It
				</Link>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					label='Toggle Navigation'
				/>
				<Navbar.Collapse
					id='basic-navbar-nav'
					className={`text-center order-lg-1`}
				>
					<Nav className='mr-auto'>
						<Button variant=''>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</Button>
						<Button variant=''>
							<Link className='nav-link' to='/shop'>
								Shop
							</Link>
						</Button>
						<Button variant=''>
							<NavDropdown title='Categories'>
								{NavLinks.map((item) => (
									<Link className='dropdown-item' to={item.link}>
										{item.name}
									</Link>
								))}
							</NavDropdown>
						</Button>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Collapse className='order-lg-3'>
					<Nav className='ml-auto'>
						{user ? (
							<LoggedIn signOut={signOut} photoURL={user.photoURL} />
						) : (
							<Login
								signIn={signIn}
								signUp={signUp}
								handleOnChange={handleOnChange}
								values={values}
								authWithProvider={authWithProvider}
							/>
						)}
						<Nav.Link href=''>{cart.length ? <CartWidget /> : null}</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
export default NavBar
