import React from "react";

const AboutUseRef = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About useRef</h1>
      <p>
        useRef returns a mutable ref object whose .current property is
        initialized to the passed argument (initialValue). The returned object
        will persist for the full lifetime of the component.
      </p>
      <p>
        useRef is a Hook in React that provides a way to create mutable
        references that persist across re-renders. It is primarily used to
        access or modify DOM elements directly, store mutable values without
        causing re-renders, and store references to other values across the
        component lifecycle.
      </p>

        <h2>Declaring Refs</h2>
        <p>To declare a ref, you can use the useRef Hook as follows:</p>
        <p>
          Call useRef inside your functional component to declare a ref. useRef
          takes an initial value as an argument and returns a mutable ref object
          with a .current property that is initialized to the passed argument.
        </p>
        <p>
          The .current property of the ref object can be used to access the
          current value of the ref. When the .current property is updated, it
          does not cause a re-render of the component.
        </p>
        <h2>Key Concepts</h2>
        <ul>
          <li>
            <strong>Accessing DOM Elements:</strong>
            <br />
            useRef can be used to access DOM elements directly in functional
            components.
          </li>
          <li>
            <strong>Storing Mutable Values:</strong>
            <br />
            useRef can be used to store mutable values without causing
            re-renders.
          </li>
          <li>
            <strong>Storing References:</strong>
            <br />
            useRef can be used to store references to other values across the
            component lifecycle.
          </li>
        </ul>
        <h2>Example</h2>
        <pre>
          {`
          import React, { useRef } from "react";

          const MyComponent = () => {
            const inputRef = useRef(null);

            const handleClick = () => {
              inputRef.current.focus();
            };

            return (
              <div>
                <input ref={inputRef} type="text" />
                <button onClick={handleClick}>Focus Input</button>
              </div>
            );
          };

          export default MyComponent;
          `}
        </pre>
        <h2>Conclusion</h2>
        <p>
          useRef is a powerful Hook in React that provides a way to create
          mutable references that persist across re-renders. It is useful for
          accessing or modifying DOM elements directly, storing mutable values
          without causing re-renders, and storing references to other values
          across the component lifecycle.
        </p>
        
    </div>
  );
};

export default AboutUseRef;
