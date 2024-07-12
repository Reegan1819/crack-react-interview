import React from "react";

const AboutPureComponents = () => {
  return (
    <div>
      <h2>About Pure Components</h2>

      <p>
        Pure Components are predictable, optimize re-renders, and avoid side
        effects. They are ideal for static content or content that only changes
        based on props and state.
      </p>
      <h2>Impure Components</h2>
      <p>
        Impure Components may cause side effects and have non-deterministic
        rendering. They are necessary when dealing with external data, network
        requests, or other side effects.
      </p>
      <h2>Summary</h2>
      <p>
        Choosing between pure and impure components depends on the specific
        needs of your application, but striving to make as many components pure
        as possible can lead to better performance and maintainability.
      </p>
    </div>
  );
};

export default AboutPureComponents;
