import {InputGroup, Button, FormControl} from "react-bootstrap"
import {useState} from "react"
import "./css/login.css"

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [id, setid] = useState("")
    return (
        <div className="login">
            <h1 className="title-name">Create a Profile</h1>
            <InputGroup className="input-form">
                <div className="device-id">
                    <FormControl
                        value={id} 
                        placeholder="ID of your device"
                        onChange={e => setid(e.target.value)}
                        aria-label="id"
                        aria-describedby="basic-addon1"
                    />
                </div>
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
                <div className="password">
                    <FormControl
                        value={confirmPassword} 
                        placeholder="Re-enter password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <Button 
                    className="submit" 
                    onClick={() => {console.log([username, password])}}>
                        Sign-up
                </Button>
            </InputGroup>
        </div>
    )
}
export default Signup