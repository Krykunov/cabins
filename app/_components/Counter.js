"use client";

import { useState } from "react";

export default function Counter({ users }) {
  console.log(users);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
