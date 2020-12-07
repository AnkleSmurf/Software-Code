import {InputGroup, Button, FormControl} from "react-bootstrap"
import {Box} from "@material-ui/core"
import {useState} from "react"
import axios from 'axios'
import "./css/login.css"

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [id, setid] = useState("")
    const [height, setHeight] = useState("")
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [bodyFat, setBodyFat] = useState("")

    const [usernameError, setUsernameError] = useState("")
    const [idError, setIdError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [weightError, setWeightError] = useState("")
    const [heightError, setHeightError] = useState("")
    const [ageError, setAgeError] = useState("")
    const [bodyfatError, setBodyfatError] = useState("")

    const contentChecker = () => {
        let status = true
        if (!username){
            setUsernameError("*This is a required field")
            status = false;
        } else {
            axios.get(`http://localhost:5000/users/username/${username}`)
                .then(response => {
                    if (response.data.length > 0){
                        setUsernameError("*This username has already been registered")
                        status = false
                    }
                })
        }

        if(!id){
            setIdError("*This is a required field")
            status = false;
        } else {
            axios.get(`http://localhost:5000/users/${id}`)
                .then(response => {
                    if (response.data.length > 0){
                        setIdError("*This id has already been registered")
                        status = false
                    }
                })
        }

        if (!password && !confirmPassword){
            setPasswordError("*This is a required field")
            status = false
        } else {
            if (password !== confirmPassword){
                setPasswordError("*Passwords does not match")
                status = false
            }
        }

        if(!age){
            setAgeError("*This is a required field")
            status = false
        }

        if(!height){
            setHeightError("*This is a required field")
            status = false
        }

        if(!weight){
            setWeightError("*This is a required field")
            status = false
        }

        if(!bodyFat){
            setBodyfatError("*This is a required field")
            status = false
        }

        return status;
    }

    const onSubmit = () => {

        const user = {
            username: username,
            password: password,
            id: id,
            weight: weight,
            height: height,
            bodyfat: bodyFat,
            age: age
        }

        if (contentChecker()){
            console.log(user)
            axios.post('http://localhost:5000/users/add', user)
                .then(res => console.log(res.data))
                .catch(error => {
                console.log(error.response)
            });
            alert('You are signed up!')
            window.location = '/'
        } else {
            alert("NO!")
        }

    }
    return (
        <div className="login">
            <h1 className="title-name">Create a Profile</h1>
            <InputGroup className="input-form">
                <div className="device-id">
                    <Box mt={5} width={1}>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {idError}
                        </div>
                        <FormControl
                            value={id} 
                            placeholder="ID of your device"
                            onChange={e => setid(e.target.value)}
                            aria-label="id"
                            aria-describedby="basic-addon1"
                        />
                    </Box>
                </div>
                <div className="username">
                    <Box mt={5} width={1}>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {usernameError}
                        </div>
                        <FormControl
                            value={username} 
                            placeholder="Username"
                            onChange={e => setUsername(e.target.value)}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </Box>
                </div>
                <div className="password">
                    <Box mt={5} width={1}>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {passwordError}
                    </div>
                    <FormControl
                        value={password} 
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                    />
                    </Box>
                </div>
                <div className="password">
                    <Box mt={5} width={1}>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {passwordError}
                        </div>
                        <FormControl
                            value={confirmPassword} 
                            type="password"
                            placeholder="Re-enter password"
                            onChange={e => setConfirmPassword(e.target.value)}
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                    </Box>
                </div>
                <div className="password">
                    <Box mt={5} width={1}>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {ageError}
                        </div>
                        <FormControl
                            value={age} 
                            placeholder="Enter your age"
                            onChange={e => setAge(e.target.value)}
                            aria-label="Age"
                            aria-describedby="basic-addon1"
                        />
                    </Box>
                </div>
                <div className="password">
                    <Box mt={5} width={1}>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {weightError}
                        </div>
                        <FormControl
                            value={weight} 
                            placeholder="Enter you weight (kg)"
                            onChange={e => setWeight(e.target.value)}
                            aria-label="Weight"
                            aria-describedby="basic-addon1"
                        />
                    </Box>
                </div>
                <div className="password">
                    <Box mt={5} width={1}>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {heightError}
                        </div>
                        <FormControl
                            value={height} 
                            placeholder="Enter your height (cm)"
                            onChange={e => setHeight(e.target.value)}
                            aria-label="Height"
                            aria-describedby="basic-addon1"
                        />
                    </Box>
                </div>
                <div className="password">
                    <Box mt={5} width={1}>
                        <div style={{ fontSize: 12, color: "red" }}>
                            {bodyfatError}
                        </div>
                        <FormControl
                            value={bodyFat} 
                            placeholder="Enter your body fat %"
                            onChange={e => setBodyFat(e.target.value)}
                            aria-label="BFP"
                            aria-describedby="basic-addon1"
                        />
                    </Box>
                </div>
                <Box mt={5} width={1} className="submit">
                    <Button 
                        onClick={() => {onSubmit()}}
                        className="btn"
                        >
                            Sign-up
                    </Button>
                </Box>
            </InputGroup>
        </div>
    )
}
export default Signup