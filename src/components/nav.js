import {useState} from "react";
import "../App.css";

function Nav() {
    var [myName, setName] = useState("Mohamed");

    var changeName = () => {
        setName("Eman");
    };
    return (
        <>
            <div className="nav">{myName}</div>
            <button onClick={changeName}>Click</button>
        </>
    );
}
export default Nav;
