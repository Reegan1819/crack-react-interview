import React from "react";

const AboutClasses = () => {
  return (
    <div>
      <h1>Features of Classes in TypeScript and explain with an example.</h1>
      <p>
        TypeScript supports object-oriented programming features like classes,
        interfaces, etc. A class in terms of OOP is a blueprint for creating
        objects. A class encapsulates data for the object. TypeScript supports
        the following features of classes −
      </p>
        <ul>
            <li>Classes</li>
            <li>Interfaces</li>
            <li>Constructors</li>
            <li>Properties</li>
            <li>Functions</li>
            <li>Modifiers</li>
            <li>Accessors</li>
            <li>Static</li>
            <li>Readonly</li>
        </ul>
        <h2>Example</h2>
        <p>Here is an example of a simple TypeScript class that represents a Car:</p>
        <pre>
            {`
                class Car {
                    model: string;
                    price: number;
                    constructor(model: string, price: number) {
                        this.model = model;
                        this.price = price;
                    }
                    display(): void {
                        console.log(\`Model: \${this.model}\`);
                        console.log(\`Price: \${this.price}\`);
                    }
                }
                let car = new Car("BMW", 5000000);
                car.display();
            `}
        </pre>
        <p>
            In the above example, we have created a class Car with two properties
            model and price. We have also defined a constructor to initialize these
            properties. The display function is used to display the model and price
            of the car. We have created an object car of class Car and called the
            display function.
        </p>
        
    </div>
  );
};

export default AboutClasses;
