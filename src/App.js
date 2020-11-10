
import './App.css';

function App() {

  const connectToDB = () => {
    const MongoClient = require('mongodb').MongoClient;
    const returned = null;
    const uri = "mongodb+srv://ankles123:ankles123@biomedicalchallenge.tzbwe.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      returned = "Yeahhh"
      client.close();
      return returned;
});
  }
  return (
    <div>
      <h1>Hello</h1>
      <p>{connectToDB()}</p>
    </div>
  );
}

export default App;
