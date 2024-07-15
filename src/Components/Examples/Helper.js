import React from "react";

const Helper = () => {
  //about react

  //find the first occurrence of a number in a given array
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ];

  //find maximum number occurance in an array

  let max = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      max = arr[i];
    }
  }

  console.log(max, maxCount);

  //fing maximum string occurance in an array
  let arr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "c", "e"];

  let max1 = 0;
  let maxCount1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    let count = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) {
        count++;
      }
    }
    if (count > maxCount1) {
      maxCount1 = count;
      max1 = arr1[i];
    }
  } 

  console.log(max1, maxCount1);

  return <div>hi i am helper</div>;
};

export default Helper;
