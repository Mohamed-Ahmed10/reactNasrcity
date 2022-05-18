import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import About from "./components/about";
import MyNavbar from "./components/navbar";
import {Routes, Route} from "react-router-dom";
import Contacts from "./components/contacts";

function App() {
    return (
        <div className="App">
            <MyNavbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </div>
    );
}

export default App;
