import React from "react";

const AboutReactRouter = () => {
  return (
    <div>
      <h2>React Router</h2>
      <p>
        React Router is a standard library for routing in React. It enables the
        navigation among views of various components in a React Application,
        allows changing the browser URL, and keeps UI in sync with the URL.
      </p>
      <h3>Key Features of React Router</h3>
      <ul>
        <li>Declarative Routing</li>
        <li>Dynamic Routing</li>
        <li>Nested Routing</li>
        <li>Route Matching</li>
        <li>Route Configuration</li>
        <li>Route Parameters</li>
        <li>Redirects</li>
        <li>404 Error Page</li>
        <li>Programmatic Navigation</li>
        <li>Navigation Lifecycle Events</li>
        <li>Lazy Loading</li>
        <li>Server Rendering</li>
      </ul>

      <h3>React Router Components</h3>
      <p>React Router provides the following components:</p>

      <ul>
        <li>BrowserRouter</li>
        <li>HashRouter</li>
        <li>MemoryRouter</li>
        <li>NativeRouter</li>
        <li>StaticRouter</li>
        <li>Router</li>
        <li>Route</li>
        <li>Link</li>
        <li>NavLink</li>
        <li>Redirect</li>
        <li>Switch</li>
        <li>withRouter</li>
        <li>Prompt</li>
        <li>MemoryRouter</li>
      </ul>

      <h3>React Router Questions and Answers</h3>
      <p>The React Router questions and answers are coming soon.</p>

      <ul>
        <li>
          <h3>What is React Router?</h3>
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps UI in sync
            with the URL.
          </p>
        </li>
        <li>
          <h3>What are the key features of React Router?</h3>
          <p>
            The key features of React Router are Declarative Routing, Dynamic
            Routing, Nested Routing, Route Matching, Route Configuration, Route
            Parameters, Redirects, 404 Error Page, Programmatic Navigation,
            Navigation Lifecycle Events, Lazy Loading, and Server Rendering.
          </p>
        </li>
        <li>
          <h3>What are the React Router components?</h3>
          <p>
            React Router provides the following components: BrowserRouter,
            HashRouter, MemoryRouter, NativeRouter, StaticRouter, Router, Route,
            Link, NavLink, Redirect, Switch, withRouter, Prompt, and
            MemoryRouter.
          </p>
        </li>
        <li>
          <h3>What are the different types of routers in React Router?</h3>
          <p>
            React Router provides the following types of routers: BrowserRouter,
            HashRouter, MemoryRouter, NativeRouter, and StaticRouter.
          </p>
        </li>
        <li>
          <h3>
            What is the purpose of the BrowserRouter component in React Router?
          </h3>
          <p>
            The BrowserRouter component is used to create a router that uses the
            HTML5 history API for navigation. It keeps the UI in sync with the
            URL and allows changing the browser URL without refreshing the page.
          </p>
        </li>
        <li>
          <h3>
            What is the purpose of the HashRouter component in React Router?
          </h3>
          <p>
            The HashRouter component is used to create a router that uses the
            hash portion of the URL for navigation. It is suitable for
            environments that do not support the HTML5 history API, such as
            static file servers.
          </p>
        </li>
        <li>
          <h3>
            What is the purpose of the MemoryRouter component in React Router?
          </h3>
          <p>
            The MemoryRouter component is used to create a router that stores
            the history in memory. It is useful for testing and non-browser
            environments, such as React Native.
          </p>
        </li>
        <li>
          <h3>
            What is the purpose of the NativeRouter component in React Router?
          </h3>
          <p>
            The NativeRouter component is used to create a router for React
            Native applications. It is similar to the BrowserRouter component
            but optimized for mobile applications.
          </p>
        </li>
        <li>
          <h3>
            What is the purpose of the StaticRouter component in React Router?
          </h3>
          <p>
            The StaticRouter component is used to create a router for
            server-side rendering in React. It does not require a DOM and is
            suitable for rendering React components on the server.
          </p>
        </li>
        <li>
          <h3>What is the purpose of the Router component in React Router?</h3>
          <p>
            The Router component is the common low-level interface for all
            router components in React Router. It provides the history object
            and location object to the child components.
          </p>
        </li>
        <li>
          <h3>What is the purpose of the Route component in React Router?</h3>
          <p>
            The Route component is used to define a route in React Router. It
            renders the specified component when the path matches the current
            URL.
          </p>
        </li>
        <li>
          <h3>What is the purpose of the Link component in React Router?</h3>
          <p>
            The Link component is used to create a hyperlink to navigate to a
            different view in a React application. It prevents the default
            behavior of the anchor tag and updates the URL without refreshing
            the page.
          </p>
        </li>
        <li>
          <h3>What is the purpose of the NavLink component in React Router?</h3>
          <p>
            The NavLink component is a special version of the Link component
            that applies additional styles to the link when it matches the
            current URL. It is useful for creating navigation menus with active
            link styles.
          </p>
        </li>
        <li>
          <h3>
            What is the purpose of the Redirect component in React Router?
          </h3>
          <p>
            The Redirect component is used to redirect the user to a different
            route in a React application. It changes the browser URL and renders
            the specified route component.
          </p>
        </li>
        <li>
          <h3>What is the purpose of the Switch component in React Router?</h3>
          <p>
            The Switch component is used to render the first child Route or
            Redirect that matches the current URL. It helps in rendering a
            single route at a time.
          </p>
        </li>
        <li>
          <h3>What is the purpose of the withRouter HOC in React Router?</h3>
          <p>
            The withRouter higher-order component (HOC) is used to pass the
            history object and location object to the wrapped component. It
            allows accessing the router props in any component.
          </p>
        </li>
        <li>
          <h3>What is the purpose of the Prompt component in React Router?</h3>
          <p>
            The Prompt component is used to prompt the user before navigating
            away from the current page. It displays a confirmation dialog with a
            custom message.
          </p>
        </li>
        <li>
          <h3>
            What is the purpose of the MemoryRouter component in React Router?
          </h3>
          <p>
            The MemoryRouter component is used to create a router that stores
            the history in memory. It is useful for testing and non-browser
            environments, such as React Native.
          </p>
        </li>

        <li>
          <h3>What are the different types of routers in React Router?</h3>
          <p>
            React Router provides the following types of routers: BrowserRouter,
            HashRouter, MemoryRouter, NativeRouter, and StaticRouter.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutReactRouter;
