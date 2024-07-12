import React from 'react'

const AboutInterfaces = () => {
  return (
    <div>
        <h1>
            About Interfaces in typescript and how to use them
        </h1>
        <p>
            An interface is a way to define a contract in your code. This contract
            includes the properties and methods that a class must implement. An
            interface can also be used to define the structure of an object.
        </p>
        <p>
            The following is an example of an interface that defines the structure
            of an object:
        </p>
        <pre>
            {`
                interface Person {
                    name: string;
                    age: number;
                }
                let person: Person = {
                    name: "John",
                    age: 30
                };
                console.log(person.name); // Output: John
                console.log(person.age); // Output: 30
            `}
        </pre>
        <p>
            In the above example, we have created an interface Person with two
            properties name and age. We have created an object person of type
            Person and assigned values to the properties name and age.
        </p>

        
    </div>
  )
}

export default AboutInterfaces