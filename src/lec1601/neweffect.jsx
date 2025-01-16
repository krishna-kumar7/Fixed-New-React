import * as React from "react";

// Simulated API function that returns a promise with a list of strings
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
      ]);
    }, 10000);
  });
}

// React component that fetches the list and displays it as an unordered list
function ApiSimulation2() {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchData().then((data) => {
      setList(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Unordered List</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiSimulation2;