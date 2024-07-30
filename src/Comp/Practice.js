import React from "react";

const Practice = () => {
 
    //find fibonacci series
    const fibonacci = (num) => {
        let a = 1, b = 0, temp;
        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
        return b;
    }

    console.log(fibonacci(5));

    //find factorial of a number
    const factorial = (num) => {
        if (num === 0) {
            return 1;
        }
        return num * factorial(num - 1);
    }

    console.log(factorial(5));

  return (
    <div>
      <h1>Practice</h1>
    </div>
  );
};

export default Practice;
