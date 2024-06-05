import React, { useLayoutEffect } from "react";

const UseLayoutEffectHook = () => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef();

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("Width: ", width);
    };

    const divHeight = ref.current.clientHeight;
    setHeight(divHeight);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return <div>Window width: {width}
  <div ref={ref} style={{ padding: "20px", border: "1px solid black" }}>
        <h1>Window height: {height}</h1>

  </div>
  </div>;
};

export default UseLayoutEffectHook;
