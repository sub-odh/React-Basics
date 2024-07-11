import Child from "./child";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount (count + 1);
  }

  return (
    <div>
      <h1>This is app Component with counter {count}.</h1>
      <button onClick={increment}>Click to increment</button>
      <Child title="first" number={count} />
      <Child title="second" number={count} />
      <Child title="third" number={count} />
    </div>
  );
}
