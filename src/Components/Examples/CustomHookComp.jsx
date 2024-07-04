import React from "react";
import useCustomHook from "./CustomHook";

const CustomHookComp = () => {
  const [value, loading] = useCustomHook();
  console.log(value);

  return (
    <div>
      <h1>Custom Hook</h1>
    <ul>
        {value?.map((item) => (
            <li key={item?.id}>{item?.title}</li>
        ))}
    </ul>
     
    </div>
  );
};

export default CustomHookComp;
