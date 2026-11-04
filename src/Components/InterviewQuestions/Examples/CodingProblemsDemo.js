import React from "react";
import {
  groupByName,
  itemsToQuantity,
  itemsToQuantityReduce,
} from "./codingProblems";

const test = [
  { name: "bob", type: "human" },
  { name: "sparkling", type: "water", color: "white" },
  { name: "trex", type: "animal" },
];

const arr = [
  { Item: "A", Quantity: 2 },
  { Item: "B", Quantity: 7 },
  { Item: "C", Quantity: 10 },
];

const CodingProblemsDemo = () => (
  <div>
    <p>groupByName(test)</p>
    <pre>{JSON.stringify(groupByName(test), null, 2)}</pre>
    <p>itemsToQuantity(arr)</p>
    <pre>{JSON.stringify(itemsToQuantity(arr))}</pre>
    <p>itemsToQuantityReduce(arr)</p>
    <pre>{JSON.stringify(itemsToQuantityReduce(arr))}</pre>
  </div>
);

export default CodingProblemsDemo;
