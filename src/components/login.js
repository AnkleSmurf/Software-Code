import {InputGroup, Button, FormControl} from "react-bootstrap"
import {useState, useContext} from "react"
import {useHistory} from "react-router-dom"
import {AppContext} from "./lib/contextLib"
import axios from "axios"
import "./css/login.css"

const Login = () => {

    const history = useHistory()

    const { setIsAuthenticated, setCurrentUser } = useContext(AppContext);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const validator = () => {
        let status = true
        let usernameError = ""
        let passwordError = ""
        if (!username){
            usernameError = "*Please enter your username"
            status = false
        }
        if (!password){
            passwordError = "*Please enter your password"
            status = false
        }
        setPasswordError(passwordError)
        setUsernameError(usernameError)
        return status
    }

    const onsubmit = () => {
        if (validator()){
            if (username === "Admin" && password === "Admin"){
                setIsAuthenticated(true)
                setCurrentUser(username)
                history.push('/dashboard')
            } else {
                axios.get(`http://localhost:5000/users/username/${username}`)
                .then(response => {
                    if (response.data.length === 0){
                        alert("username not found")
                    } else if (response.data[0].password === password){
                        alert("login information validated")
                        setIsAuthenticated(true)
                        setCurrentUser(username)
                        history.push('/dashboard')
                    } else {
                        alert("login information is incorrect")
                    }
                })
            }
        }
    }
    return (
        <div className="login">
            <h1 className="title-name">Login</h1>
            <InputGroup className="input-form">
                <div className="username">
                    {usernameError}
                    <FormControl
                        value={username} 
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="password">
                    {passwordError}
                    <FormControl
                        type="password"
                        value={password} 
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <Button 
                    className="submit" 
                    onClick={() => {onsubmit()}}>
                        Login
                </Button>
            </InputGroup>
        </div>
    )
}
export default Login