import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    // selector
    const data = useSelector(state => state.item.item);
    return (
        <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary fixed-top" >
            <Container>
                <Link to="/">
                    <Navbar.Brand>E-Comm</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Products</Nav.Link>
                    </Nav>
                    <Link to="cart">
                        <i class="fa-solid fa-cart-shopping fa-white"><div className='circle'>{data.length}</div></i>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar