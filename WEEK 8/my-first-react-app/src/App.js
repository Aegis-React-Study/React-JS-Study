import React from "react";
import { useState } from "react";

function App() {
  // 함수 작성부
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <span>{counter}</span>
      <div>
        <input type="button" value="+" onClick={handleClick} />
        <input type="button" value="-" />
      </div>
    </div>
  );
}

export default App;
