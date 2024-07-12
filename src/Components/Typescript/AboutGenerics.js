import React from "react";

const AboutGenerics = () => {
  return (
    <div>
      <h1>About Generics in typescript</h1>
      <p>
        Generics is a way of creating reusable components, functions, and
        classes that work with a variety of types rather than a single one.
        Generics allow you to write reusable, type-safe code without sacrificing
        type information.
      </p>
     
      <p>
        The following is an example of a generic function that takes an array of
        items and returns the first item in the array:
      </p>
      <pre>
        {`
                function first<T>(items: T[]): T {
                    return items[0];
                }
                let result = first([1, 2, 3]);
                console.log(result); // Output: 1
            `}
      </pre>
    </div>
  );
};

export default AboutGenerics;
