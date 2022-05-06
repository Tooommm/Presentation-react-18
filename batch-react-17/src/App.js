import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("=== click ===");
    fetchSomething().then(() => {
      // React 17 et les versions précédentes ne Batch pas ceci
      setCount(count + 1); // l'app re-render
      setFlag(!flag); // l'app re-render
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents />
    </div>
  );
}

function LogEvents(props) {
  useEffect(() => {
    console.log("Commit");
  });
  console.log("Render");
  return null;
}

function fetchSomething() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export default App;
