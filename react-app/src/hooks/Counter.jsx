import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has Clicked {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default Counter;
