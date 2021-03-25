import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';


const NavBar = () => { 
    return(
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Shop</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#categories/3.1">Category #1</NavDropdown.Item>
                        <NavDropdown.Item href="#categories/3.2">Category #2</NavDropdown.Item>
                        <NavDropdown.Item href="#categories/3.3">Category #3</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
};
export default NavBar;
