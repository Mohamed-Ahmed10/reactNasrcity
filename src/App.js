import "./App.css";
import Nav from "./components/nav";

function App() {
    var myName = "Mohamed";
    var black = "#000";
    return (
        <div className="App">
            <Nav />
            <input
                type="text"
                style={{backgroundColor: {black}, color: "#FFF"}}
            />
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
