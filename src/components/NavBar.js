import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import CartWidget from './cart/CartWidget';


const NavBar = () => { 
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='order-lg-2 font-size-1' href="#home">E-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='text-center order-lg-1'>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Shop</Nav.Link>
                    <NavDropdown title='Categories'>
                        <NavDropdown.Item href="#action/3.1">Category </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Category </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Category </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='order-lg-3'>
                    <Nav className="ml-auto">
                        <Nav.Link href="#sign-in">Sign In</Nav.Link>
                        <Nav.Link href="#sign-up">Sign Up</Nav.Link>
                        <Nav.Link href=''><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        );
};
export default NavBar;
