import React from "react";

const AboutUseContext = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useContext Hook</h1>
      <p>
        The useContext hook in React is used to access the context object,
        allowing you to share data between components without passing props
        through every level of the component tree. It's particularly useful for
        global state, themes, or any other data that needs to be accessed by
        many components at different levels of your application.
      </p>
      <h2>Declaring Context</h2>
      <p>
        To declare a context, you can use the createContext function as follows:
      </p>
      <p>
        Call createContext to create a new context object. The createContext
        function takes an optional argument, the default value of the context.
        This value is used when a component does not have a matching Provider
        above it in the component tree.
      </p>
      <h2>When to Use useContext</h2>
      <p>
        The useContext hook is useful when you have data that needs to be
        accessed by many components at different levels of your application. It
        can be used to avoid prop drilling, where you pass props down through
        multiple levels of components.
      </p>
      <ul>
        <li>
          <strong>Global State:</strong>
          <br />
          When you need to share state across many components.
        </li>
        <li>
          <strong>Theme:</strong>
          <br />
          When you want to provide a theme to many components.
        </li>
        <li>
          <strong>Settings or Configuration:</strong>
          <br />
          When you have settings or configuration data that needs to be accessed
          by many components.
        </li>
        <li>
          <strong>Authentication:</strong>
          <br />
          When you need to access the current user's authentication state in
          multiple components.
        </li>
      </ul>
      <h2>Example</h2>
      <pre>
        {`
          import React, { createContext, useContext } from "react";

          const MyContext = createContext();

          const ParentComponent = () => {
            return (
              <MyContext.Provider value={"Hello from Context"}>
                <ChildComponent />
              </MyContext.Provider>
            );
          };

          const ChildComponent = () => {
            const value = useContext(MyContext);
            return <div>{value}</div>;
          };
          `}
      </pre>
      <h2>Benefits of useContext</h2>
      <ul>
        <li>
          <strong>Reduced Prop Drilling:</strong>
          <br />
          Avoid passing props down through multiple levels of components.
        </li>
        <li>
          <strong>Centralized Data:</strong>
          <br />
          Keep data in a central location and make it accessible to many
          components.
        </li>
        <li>
          <strong>Easy to Use:</strong>
          <br />
          useContext is easy to use and provides a clean way to access context
          data.
        </li>
      </ul>
      <h2>Conclusion</h2>
      <p>
        The useContext hook in React is a powerful tool for sharing data between
        components without having to pass props down through the component tree.
        It's particularly useful for global state, themes, and other data that
        needs to be accessed by many components at different levels of your
        application.
      </p>
    </div>
  );
};

export default AboutUseContext;
