import {
  groupByName,
  groupByType,
  itemsToQuantity,
  itemsToQuantityReduce,
} from "./codingProblems";

const test1 = [
  { name: "bob", type: "human" },
  { name: "sparkling", type: "water", color: "white" },
  { name: "trex", type: "animal" },
];

const arr = [
  { Item: "A", Quantity: 2 },
  { Item: "B", Quantity: 7 },
  { Item: "C", Quantity: 10 },
];

describe("codingProblems", () => {
  test("groupByName keeps every other field in the value", () => {
    expect(groupByName(test1)).toEqual({
      bob: { type: "human" },
      sparkling: { type: "water", color: "white" },
      trex: { type: "animal" },
    });
  });

  test("itemsToQuantity maps Item to Quantity", () => {
    expect(itemsToQuantity(arr)).toEqual({ A: 2, B: 7, C: 10 });
  });

  test("reduce version gives the same result", () => {
    expect(itemsToQuantityReduce(arr)).toEqual(itemsToQuantity(arr));
  });

  test("groupByType collects items that share a key", () => {
    const list = [
      { name: "a", type: "x" },
      { name: "b", type: "x" },
      { name: "c", type: "y" },
    ];
    expect(groupByType(list)).toEqual({
      x: [list[0], list[1]],
      y: [list[2]],
    });
  });
});
