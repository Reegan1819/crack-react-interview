import React from "react";

const AboutUseState = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useState</h1>
      <p>
        useState is a Hook that allows you to have state variables in functional
        components. You pass the initial state to this function and it returns a
        variable with the current state value (not necessarily the initial
        state) and another function to update this value.
      </p>
      <h2>Declaring State Variables</h2>
      <p>
        To declare a state variable, you can use the useState Hook as follows:
      </p>
      <p>
        Call useState inside your functional component to declare a state
        variable. useState takes the initial state as an argument and returns an
        array with two elements:
      </p>
      <ul>
        <li>
          The first element is the current state value, and the second element
          is a function that lets you update it.
        </li>
      </ul>
      <h3>Conclusion:</h3>
      <p>
        useState is a powerful and flexible hook that allows you to manage state
        in functional components.
      </p>
    </div>
  );
};

export default AboutUseState;
