import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_INTERFACES,
  ABOUT_ENUMS,
  ABOUT_GENERICS,
  ABOUT_DECORATORS,
  ABOUT_NAMESPACES,
  ABOUT_MODULES,
  ABOUT_CLASSES,
} from "../Routers/RouteEndpoints";

const AboutTypeScript = () => {
  return (
    <div>
      <h2>About TypeScript</h2>
      <p>
        TypeScript is a superset of JavaScript that adds optional static types.
        It is designed for the development of large applications and
        transcompiles to JavaScript. TypeScript is developed and maintained by
        Microsoft.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Optional Static Typing</li>
        <li>Interfaces</li>
        <li>Enums</li>
        <li>Generics</li>
        <li>Decorators</li>
        <li>Namespaces</li>
        <li>Modules</li>
        <li>Classes</li>
      </ul>
      <h2>Summary</h2>
      <p>
        TypeScript is a powerful tool for building large applications with
        JavaScript. It provides optional static types, interfaces, enums,
        generics, decorators, namespaces, modules, and classes to help you write
        more maintainable and scalable code.
      </p>

      <h2>Example</h2>
      <p>
        Here is an example of a simple TypeScript function that adds two
        numbers:
      </p>
      <pre>
        {`
          function add(a: number, b: number): number {
            return a + b;
          }
          
          console.log(add(1, 2)); // Output: 3
          `}
      </pre>

      <h3>Features Links</h3>
      <Link to={ABOUT_INTERFACES}>About Interfaces</Link>
        <br />
        <Link to={ABOUT_ENUMS}>About Enums</Link>
        <br />
        <Link to={ABOUT_GENERICS}>About Generics</Link>
        <br />
        <Link to={ABOUT_DECORATORS}>About Decorators</Link>
        <br />
        <Link to={ABOUT_NAMESPACES}>About Namespaces</Link>
        <br />
        <Link to={ABOUT_MODULES}>About Modules</Link>
        <br />
        <Link to={ABOUT_CLASSES}>About Classes</Link>

    </div>
  );
};

export default AboutTypeScript;
