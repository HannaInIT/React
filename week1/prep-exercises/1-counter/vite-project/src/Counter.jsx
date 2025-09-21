import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <Count count={count} />
      <Button onIncrement={handleIncrement} />
      <p>{feedback}</p>
    </div>
  );
}

export default Counter
