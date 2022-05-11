import React from "react";
import {Button} from "react-bootstrap";
class Trainees extends React.Component {
    state = {
        name: "Mohamed",
        course: "React.js",
        order: 3,
    };

    clicking = () => {
        // this.state.name = "Ahmed";
        // console.log(this.state.name);
        this.setState({
            name: "Ahmed",
        });
    };
    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.course}</div>
                <div>{this.state.order}</div>
                <Button className="btn btn-primary" onClick={this.clicking}>
                    Click me
                </Button>
            </div>
        );
    }
}

export default Trainees;
