import React from "react";

const AboutUseLayoutEffect = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About useLayoutEffect</h1>
      <p>
        The useLayoutEffect Hook is similar to useEffect, but it fires
        synchronously after all DOM mutations.
      </p>
      <h2>When to use useLayoutEffect?</h2>
      <p>
        If you need to read layout from the DOM and then make DOM mutations
        based on that, use useLayoutEffect.
      </p>
      <h2>Declaring useLayoutEffect</h2>
      <p>
        To declare a useLayoutEffect, you can use the useLayoutEffect Hook as
        follows:
      </p>
      <h2>Example</h2>
      <pre>
        {`
          import React, { useLayoutEffect } from "react";

          const MyComponent = () => {
            useLayoutEffect(() => {
              // Your code here
            });
          };
          `}
      </pre>
      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Sync:</strong>
          <br />
          useLayoutEffect runs synchronously after all DOM mutations.
        </li>
        <li>
          <strong>Read Layout:</strong>
          <br />
          useLayoutEffect can be used to read layout from the DOM before the
          browser paints.
        </li>
        <li>
          <strong>DOM Mutations:</strong>
          <br />
          useLayoutEffect can be used to make DOM mutations based on the layout.
        </li>
      </ul>

      <h2>useLayoutEffect vs useEffect</h2>
      <p>
        The main difference between useLayoutEffect and useEffect is that
        useLayoutEffect runs synchronously after all DOM mutations, while
        useEffect runs asynchronously.
      </p>
      <p>
        If you need to read layout from the DOM and then make DOM mutations
        based on that, use useLayoutEffect. Otherwise, use useEffect.
      </p>

      <h2>Example of dom mutations</h2>
      <pre>
        {`
                import React, { useLayoutEffect, useState } from "react";

                const MyComponent = () => {
                  const [width, setWidth] = useState(0);

                  useLayoutEffect(() => {
                    const handleResize = () => {
                      setWidth(window.innerWidth);
                    };

                    window.addEventListener("resize", handleResize);

                    return () => {
                      window.removeEventListener("resize", handleResize);
                    };
                  });

                  return <div>Window width: {width}</div>;
                };

                export default MyComponent;
                `}
      </pre>
    </div>
  );
};

export default AboutUseLayoutEffect;
