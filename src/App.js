import "./App.css";
import Courses from "./components/courses";
import Nav from "./components/nav";
import Trainees from "./components/trainees";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTest from "./components/bootstrapTest";
import MyNavbar from "./components/navbar";
import PropsTest from "./components/propsTest";

function App() {
    var myName = "Mohamed Ahmed";
    var black = "#000";
    return (
        <div className="App">
            {/* <MyNavbar />
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
            <BootstrapTest /> */}
            {/* <Nav /> */}
            <PropsTest courseName="HTML course" courseDesc="bla bla" />
            <PropsTest courseName="CSS course" courseDesc="decs 2 " />
            <PropsTest courseName="React course" courseDesc="desc 3" />
        </div>
    );
}

function test() {
    console.log("TEST");
}
export default App;
