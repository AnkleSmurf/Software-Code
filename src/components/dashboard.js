import { Jumbotron, Button } from "react-bootstrap";
import {AppContext} from "./lib/contextLib"
import {useContext, useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import "./css/dash.css"

const Dashboard = () => {

    const history = useHistory()

    const { isAuthenticated, currentUser } = useContext(AppContext);

    const defaultUser = {
        id: "NA",
        username: "NA",
        height: "NA",
        weight: "NA",
        bodyfat: "NA",
        age: "NA"
    }

    const [information, setInformation] = useState([defaultUser])

    useEffect(() => {
        const addInformation = () => {
            if (currentUser === "Admin"){
                axios.get("http://localhost:5000/users").then(res => {
                    setInformation(res.data)
                })
            } else {
                axios.get(`http://localhost:5000/users/username/${currentUser}`).then(res => {
                    setInformation(res.data)
                })
            }
        }
        addInformation()
    }, [information])

    

    const content = (info) => {
        return (
            info.map(attribute => 
                <div key={attribute.id}>
                    <Jumbotron>
                    <h1>ID: {attribute.id}</h1>
                        <ul>
                            <li> Username: {attribute.username}</li>
                            <li> Height: {attribute.height}</li>
                            <li> Weight: {attribute.weight}</li>
                            <li> Age: {attribute.age}</li>
                            <li> Bodyfat %: {attribute.bodyfat}</li>
                        </ul>
                        <div>
                            <button onClick={() => {
                                history.push(`/report/${attribute.id}`)
                            }}> 
                               View Data
                            </button>
                        </div>
                    </Jumbotron>
                </div>
            )
        )
    }

    return (
        <div>
        {isAuthenticated ? (
            <div>
                {content(information)}
            </div>
        ) : (
            <div>
                <Jumbotron className="container1">
                    <h1>Oops you have not logged in yet</h1>
                    <Button onClick={() => {
                        history.push("/login")
                    }}>
                        Login
                    </Button>
                </Jumbotron>
            </div>
        )}
        </div>
        
    )
}


export default Dashboard;