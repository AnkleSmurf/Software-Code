import { Navbar, Nav, Button } from 'react-bootstrap';
import {AppContext} from "./lib/contextLib"
import {useContext} from "react"
import {useHistory} from "react-router-dom"
import "./css/header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    
    const history = useHistory()

    const { isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser } = useContext(AppContext);

    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand> Ankle Injury Detection </Navbar.Brand>
                {isAuthenticated ? (
                    <p className="welcome1">Welcome {currentUser}!</p>
                ) : (null)}
                {!isAuthenticated ? (
                    <div>
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="./signup">Sign up</Nav.Link>
                            <Nav.Link href="/">Our Goal</Nav.Link>
                        </Nav>
                    </div>
                ) : (
                    <Button className="logout"
                    onClick={() => {
                        setIsAuthenticated(false)
                        setCurrentUser("")
                        console.log("change occured")
                        history.push("/")
                        }}>
                        Logout
                    </Button>
                )}
            </Navbar>
        </div>
    )
}

export default Header