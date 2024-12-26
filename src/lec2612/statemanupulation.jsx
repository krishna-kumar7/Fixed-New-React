import * as React from "react";

class StateExample2 extends React.Component {
    state = {
        first: false,
        second: true,
        txt: "Initial Value",
        clr: "red",
    };

    constructor() {
        super();
        setTimeout(() => {
            this.setState({
                first: true,
                second: false,
                txt: "Changed Value",
                clr: "blue",
            });
            setTimeout(() => {
                this.setState({
                    first: false,
                    second: true,
                    txt: "Updated Value 2",
                    clr: "yellow",
                });
            }, 2000);
        }, 0); // Added a timeout to ensure the first setTimeout executes
    }

    render() {
        const { first, second, txt, clr } = this.state; // Changed from this.props to this.state
        return (
            <div>
                <button disabled={first}>Button 1</button>
                <button disabled={second}>Button 2</button>
                <label style={{ color: clr }}>{txt}</label>
                <input type="text" /> {/* Changed type to "text" */}
            </div>
        );
    }
    }
    export default StateExample2;