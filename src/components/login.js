import {InputGroup, Button, FormControl} from "react-bootstrap"
import react, {useState} from "react"
import "./css/login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="login">
            <h1 className="title-name">Login</h1>
            <InputGroup className="input-form">
                <div className="username">
                    <FormControl
                        value={username} 
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="password">
                    <FormControl
                        value={password} 
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <Button 
                    className="submit" 
                    onClick={() => {console.log([username, password])}}>
                        Login
                </Button>
            </InputGroup>
        </div>
    )
}
export default Login