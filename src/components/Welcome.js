import {Jumbotron} from "react-bootstrap";
const Welcome = () => {

    return (
        <div>
            <Jumbotron>
                <h1> Welcome </h1>
                <p> Instructions: Every one of our devices are assigned by a unique ID, when you receive our foot mapping socks the ID of the device will come with it too. Go to the sign up page and register for a personal account with the unique ID of your device. After activating your device and connecting to wifi, walk around in your socks (the longer you walk the more accurate our mapping will get) and your data will be uploaded and analyzed 10 minutes after your session is finished. Login to see the heatmaps generated. </p>
                <p>Sample username: JohnSmith</p>
                <p>Sample password: 123454321</p>
            </Jumbotron>
        </div>
    )
}
export default Welcome;