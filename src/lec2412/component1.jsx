import * as React from "react";
class Xyz extends React.Component1 {
    render() {
        return(
         <div>
           <h1>componebt1</h1>
           <h2>component</h2>
           <h3>component</h3>
           <Abc/>
        </div>
        );
    }
}
class Abc extends React.Component1 {
    render() {
        return (
            <div>
                <h1>component2</h1>
                <h2>component2</h2>
                <h3>component2</h3>
                <Aaa/>
            </div>
        );
}
}
class Aaa extends React.Component1 {
    render() {
        return (
            <div>
                <h1>component3</h1>
                <h2>component3</h2>
                <h3>component3</h3>
            </div>
        );
    }
}
export default Xyz;