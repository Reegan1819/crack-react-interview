import React from 'react'

const AboutEnums = () => {
  return (
    <div>
        <h1>Enums in typescript and explain</h1>
        <p>Enums allow us to define a set of named constants i.e. a collection of related values that can be numeric or string values.</p>
        <p>Enums are defined using the enum keyword.</p>
        <p>Enums are not supported by JavaScript. However, TypeScript supports enums.</p>
        <h2>Example</h2>
        <p>Here is an example of an enum that represents the days of the week:</p>
        <pre>
            {`
                enum Days {
                    Sunday,
                    Monday,
                    Tuesday,
                    Wednesday,
                    Thursday,
                    Friday,
                    Saturday
                }
                console.log(Days.Monday); // Output: 1
            `}
        </pre>
        <p>
            In the above example, we have created an enum Days with the days of the week as constants. By default, enums start numbering their members starting from 0. So, Sunday is 0, Monday is 1, and so on.
        </p>
        
       
    </div>
  )
}

export default AboutEnums