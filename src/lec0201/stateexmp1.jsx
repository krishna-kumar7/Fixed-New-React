import { useState } from "react";
function StateExmp1(){
    const [name, setName] = useState("Krishna");
    const [age, setAge] = useState(25);
    const [color, setColor] = useState("red");
    //const [bld , setBld] = useState ("fontWeight");
    return(
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <p>name of condidate is : {name}</p>
            <br />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
            <br />
            <p>age of condidate is : {age}</p>

            <p style={{background: color,height: 50}}>
                age of condidate is : {age}
            </p>
           {/* Blue :<input type="radio" name="C1" onChange={() => setColor("Blue")} />
           Yellow:<input type="radio" name="C1" onChange={() => setColor("Yellow")} />
           Pink:<input type="radio" name="C1" onChange={() => setColor("Pink")} /> */}
            <br />
             <input
              type="checkbox"
               name="C1" 
               onChange={() => {
                setColor("red");
               setName("Red")
               }}
                />
            <input
             type="checkbox"
              name="C1" onChange={() =>{
               setColor("green");
               setName("Green")
               }} 
               />
             <input
              type="checkbox"
              name="C1"
              onChange={() =>{
              setColor("orange");
              setName("Orange")}} 
                />
        </div>
    );
}
export default StateExmp1;