import "./App.css";
import Nav from "./components/nav";

function App() {
    var myName = "Mohamed";
    return (
        <div className="App">
            <Nav />
            <input type="text" />
            Hello
            {myName}
            <button onClick={test}>OK</button>
        </div>
    );
}

function test() {
    console.log("TEST");
}
export default App;
