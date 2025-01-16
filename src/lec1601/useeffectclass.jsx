import * as React from "react";

// Function to fetch user data
function fetchUser () {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Corrected the object property to be an array
            resolve({ id: 1, name: "Krishna Kumar", age: "20", list: ["hello", "world", "rkus", "engineering"] });
        }, 10000);
    });
}

// Component to simulate API call
function ApiSimulation() {
    const [user, setUser] = React.useState("loading...");
    const [id, setId] = React.useState("loading...");
    const [age, setAge] = React.useState("loading...");
    const [list, setList] = React.useState("loading...");

    // Added dependency array to useEffect hook
    React.useEffect(() => {
        fetchUser ().then((userData) => {
            setUser(userData.name);
            setId(userData.id);
            setAge(userData.age);
            setList(userData.list);
        });
    }, []); // Added dependency array

    return (
        <div>
            User: {user}, <br />
            Id: {id}, <br />
            Age: {age} <br />
            List: {Array.isArray(list) ? list.join(", ") : list}
        </div>
    );
}

export default ApiSimulation;