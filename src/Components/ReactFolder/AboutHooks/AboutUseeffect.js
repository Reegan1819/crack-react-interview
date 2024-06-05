import React from "react";

const AboutUseEffect = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect</h1>
      <p>
        useEffect is a hook that allows you to perform side effects in your
        functional components. It is a close replacement for componentDidMount,
        componentDidUpdate, and componentWillUnmount in class components.
        <p>
          useEffect is a Hook in React that allows you to perform side effects
          in your functional components. Side effects include data fetching,
          subscriptions, or manually changing the DOM, among other things.
        </p>
      </p>
      <h2>Declaring Effects</h2>
      <p>To declare an effect, you can use the useEffect Hook as follows:</p>
      <p>
        Call useEffect inside your functional component to declare an effect.
        useEffect takes two arguments: a function that contains the effect code
        and an optional array of dependencies.
      </p>
      <p>
        The function passed to useEffect will run after the render is committed
        to the screen. The optional array of dependencies is used to tell React
        when to re-run the effect. If any of the dependencies change, the effect
        will re-run. If you don't pass an array of dependencies, the effect will
        run after every render.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Mounting:</strong>
          <br />
          useEffect with an empty dependency array [] will run only once after
          the initial render.
        </li>
        <li>
          <strong>Updating:</strong>
          <br />
          useEffect with a dependency array will run after every render if the
          dependencies have changed.
        </li>
        <li>
          <strong>Unmounting:</strong>
          <br />
          useEffect with a cleanup function will run when the component is
          unmounted.
        </li>
      </ul>
      <h2>dependencies</h2>

      <pre>
        {`
        useEffect(() => {
          // Effect runs only if count changes
        }, [count]);
        `}
      </pre>
      <pre>
        {`
        useEffect(() => {
          // Effect runs only once after initial render
        }, []);
        `}
      </pre>
      <h2>Cleaning Up Effects:</h2>
      <p>
        If your effect returns a function, React will run it when it is time to
        clean up the effect. This is useful for unsubscribing from subscriptions
        or cleaning up any resources that your effect may have created.
      </p>
      <pre>
        {`
            useEffect(() => {
            // Effect code
            return () => {
                // Clean up code
            };
            });
            `}
      </pre>
      <pre>
        {`
            useEffect(() => {
            const subscription = subscribe();
            return () => {
                subscription.unsubscribe();
            };
            });
            `}
      </pre>
      <pre>
        {`
            useEffect(() => {
            const timer = setInterval(() => {
                // Code
            }, 1000);
            return () => {
                clearInterval(timer);
            };
            });
            `}
      </pre>
      <h3>Conclusion</h3>
      <p>
        useEffect is a crucial tool in the React ecosystem for handling side
        effects in functional components. By understanding how to manage
        dependencies and clean up resources, you can use useEffect to create
        robust, side-effectful components.
      </p>
    </div>
  );
};

export default AboutUseEffect;
