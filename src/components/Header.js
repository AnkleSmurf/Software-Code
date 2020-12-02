import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand> Ankle Injury Detection </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="./signup">Sign up</Nav.Link>
                    <Nav.Link href="/">Our Goal</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header