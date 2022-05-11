import "./App.css";
import Courses from "./components/courses";
import Nav from "./components/nav";
import Trainees from "./components/trainees";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTest from "./components/bootstrapTest";
import MyNavbar from "./components/navbar";

function App() {
    var myName = "Mohamed Ahmed";
    var black = "#000";
    return (
        <div className="App">
            <MyNavbar />
            <Nav />
            <input
                type="text"
                style={{backgroundColor: {black}, color: "#FFF"}}
            />
            Hello
            {myName}
            <button onClick={test}>OK</button>
            <Courses />
            <Trainees />
            <hr />
            <BootstrapTest />
        </div>
    );
}

function test() {
    console.log("TEST");
}
export default App;
