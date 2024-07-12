import React from "react";

const AboutDecorators = () => {
  return (
    <div>
      <h1>About decorators in typescript and how to use them</h1>
      <p>
        Decorators are a special kind of declaration that can be attached to a
        class declaration method accessor, property or parameter. Decorators use
        the form @expression, where expression must evaluate to a function that
        will be called at runtime with information about the decorated
        declaration.
      </p>
      <p>
        Decorators are a proposed feature for JavaScript and are available as an
        experimental feature of TypeScript.
      </p>
      <p>
        The following is an example of a decorator that logs the name of the
        method it is attached to:
      </p>
      <pre>
        {`
                function log(target: any, key: string) {
                    console.log(key);
                }

                class Example {
                    @log
                    method() {
                        // code
                    }
                }
            `}
      </pre>
      <p>
        In the above example, the log decorator logs the name of the method it
        is attached to. The @log syntax is used to attach the decorator to the
        method. Decorators can also take arguments. The following is an example
        of a decorator that logs the name of the method and the arguments it is
        called with:
      </p>
      <pre>
        {`
                function log(target: any, key: string, descriptor: PropertyDescriptor) {
                    return {
                        value: function (...args: any[]) {
                            console.log(key, args);
                        }
                    };
                }

                class Example {
                    @log
                    method(arg1: string, arg2: number) {
                        // code
                    }
                }
            `}
      </pre>
    </div>
  );
};

export default AboutDecorators;
