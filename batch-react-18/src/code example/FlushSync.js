import { useState, useEffect } from "react";
import { flushSync } from "react-dom"; // Note: react-dom, not react

function FlushSync() {
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    flushSync(() => {
      setCounter(counter + 1);
    });
    // React à déjà Updaté le DOM
    flushSync(() => {
      setFlag(!flag);
    });
    // React à déjà Updaté le DOM
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

export default FlushSync;
