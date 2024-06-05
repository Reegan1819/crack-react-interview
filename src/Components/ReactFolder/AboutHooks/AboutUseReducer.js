import React from "react";

const AboutUseReducer = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About UseReducer</h1>
      <p>
        The useReducer is a hook that is used for state management in React
        applications. It is an alternative to useState. It is mostly used to
        manage state objects that contain multiple sub-values.
      </p>
      <h2>When to use useReducer instead of useState?</h2>
      <p>
        If you have complex state logic that involves multiple sub-values or
        when the next state depends on the previous one, it is recommended to
        use useReducer instead of useState.
      </p>
      <h2>Declaring Reducers</h2>
      <p>To declare a reducer, you can use the useReducer Hook as follows:</p>
      <h2>State Management Libraries:</h2>
        <p>
            If you have a complex state management logic, you can use libraries like
            Redux or MobX. These libraries provide advanced state management
            capabilities and are widely used in large-scale applications.
        </p>

            
    </div>
  );
};

export default AboutUseReducer;
