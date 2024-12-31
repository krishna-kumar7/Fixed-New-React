import * as React from "react";
import MyPropButton from "./propscomp1";
import MyPropList from "./propscomp2";

class PropExmp extends React.Component {
    state ={
        var1: true,
        var2: "Hello World",
        var4: [1, 2, 3, 4, 5],
        
    };
    render(){
        const {var1,var2,var4} = this.state;
        return (
            <div>
                <MyPropButton xyz={var1} abc={var2}/>
                <MyPropList itms={var4} />
            </div>
        );
    }
}
export default PropExmp;