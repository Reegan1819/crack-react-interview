import React from "react";


const UseMemoHook = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const increment2 = React.useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const isEven = React.useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  const isEven2 = React.useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count2 % 2 === 0;
  }, [count2]);

  return (
    <div>
      <h1>Count 1: {count}</h1>
      <button onClick={increment}>Increment 1</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <h1>Count 2: {count2}</h1>
      <button onClick={increment2}>Increment 2</button>
      <span>{isEven2 ? "Even" : "Odd"}</span>
    </div>
  );
};

export default UseMemoHook;
