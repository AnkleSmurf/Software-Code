import {useState} from "react"
import {AppContext} from "./components/lib/contextLib"
import App from "./App"

const Context = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [currentUser, setCurrentUser] = useState("")

    return (
        <AppContext.Provider value={{isAuthenticated, setIsAuthenticated, currentUser, setCurrentUser}}>
            <App/>
        </AppContext.Provider>
    )
}

export default Context;