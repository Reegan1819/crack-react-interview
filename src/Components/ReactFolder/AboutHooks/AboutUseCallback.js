import React from "react";

const AboutUseCallback = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useCallback</h1>
      <p>
        useCallback is a Hook that returns a memoized version of the callback
        function that only changes if one of the dependencies has changed. This
        is useful when passing callbacks to optimized child components that rely
        on reference equality to prevent unnecessary renders.
      </p>
      <h2>Declaring a Memoized Callback</h2>
      <p>
        To declare a memoized callback, you can use the useCallback Hook as
        follows:
      </p>
      <p>
        Call useCallback inside your functional component to declare a memoized
        callback. useCallback takes a callback function and an array of
        dependencies as arguments and returns a memoized version of the callback
        function.
      </p>
      <h3>Conclusion:</h3>
      <p>
        useCallback is a powerful Hook that allows you to memoize callbacks and
        optimize performance in your React applications.
      </p>
    </div>
  );
};

export default AboutUseCallback;
