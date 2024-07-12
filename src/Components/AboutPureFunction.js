import React from "react";

const AboutPureFunction = () => {
  return (
    <div>
      <h2>About Pure Functions</h2>
      <p>
        A function is called pure function if it satisfies below two conditions:
      </p>
      <ul>
        <li>It returns the same value for the same arguments.</li>
        <li>It does not have any side effects.</li>
      </ul>
      <h2>Example</h2>
      <p>Here is an example of a simple pure function that adds two numbers:</p>
      <pre>
        {`
                function add(a: number, b: number): number {
                    return a + b;
                }
                
                console.log(add(1, 2)); // Output: 3
            `}
      </pre>

      <h2>Summary</h2>
      <p>
        Pure functions are an important concept in functional programming. They
        are easy to reason about and test because they do not have any side
        effects. Pure functions are also composable, meaning that you can
        combine them to create more complex functions.
      </p>
      <h2>Impure Functions</h2>
      <p>
        A function is called impure function if it satisfies below two
        conditions:
      </p>
      <ul>
        <li>It returns different value for the same arguments.</li>
        <li>It has side effects.</li>
      </ul>
      <h2>Example</h2>
      <p>
        Here is an example of a simple impure function that adds two numbers:
      </p>
      <pre>
        {`
                let result = 0;
                function add(a: number, b: number): number {
                    result = a + b;
                    return result;
                }
                
                console.log(add(1, 2)); // Output: 3
                console.log(add(1, 2)); // Output: 6
            `}
      </pre>
      <h2>
        Advantages of Pure Functions
      </h2>
        <ul>
            <li>They are easier to reason about and test.</li>
            <li>They are composable.</li>
            <li>They can be memoized for performance optimization.</li>
            <li>They are less error-prone.</li>
        </ul>

        
    </div>
  );
};

export default AboutPureFunction;
