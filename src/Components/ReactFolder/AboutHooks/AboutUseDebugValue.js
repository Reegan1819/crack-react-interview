import React from "react";

const AboutUseDebugValue = () => {
  return (
    <div>
      <h1>useDebugValue</h1>
      <p>
        useDebugValue is a custom hook that can be used to display a label for
        custom hooks in React DevTools.
      </p>
      <p>
        This can be useful for debugging custom hooks, as it allows you to see
        the label for the custom hook in React DevTools.
      </p>
      <p>
        The useDebugValue hook takes two arguments: a value and a formatter
        function. The formatter function is used to format the value for display
        in React DevTools.
      </p>
      <p>
        Here's an example of how you can use the useDebugValue hook to display a
        label for a custom hook:
      </p>
      <pre>
        {`
      import { useDebugValue } from 'react';

      function useCustomHook(value) {
        useDebugValue(value, value => \`Custom Hook: \${value}\`);
        return value;
      }
      `}
      </pre>
      <p>
        In this example, the useCustomHook custom hook takes a value as an
        argument and uses the useDebugValue hook to display a label for the
        custom hook in React DevTools.
      </p>
    </div>
  );
};

export default AboutUseDebugValue;
