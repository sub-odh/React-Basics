import { useState } from "react";

export default function Child(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>
        This is {props.title} counter child Component {count}.
        <button onClick={increment}>Click to increment child👌</button>
      </h2>
    </div>
  );
}
