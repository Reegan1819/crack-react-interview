// Array -> object coding questions

// { name, ...rest } -> { [name]: rest }
export const groupByName = (list) =>
  Object.fromEntries(list.map(({ name, ...rest }) => [name, rest]));

// { Item, Quantity } -> { [Item]: Quantity }
export const itemsToQuantity = (list) =>
  Object.fromEntries(list.map(({ Item, Quantity }) => [Item, Quantity]));

// same result with reduce
export const itemsToQuantityReduce = (list) =>
  list.reduce((acc, { Item, Quantity }) => {
    acc[Item] = Quantity;
    return acc;
  }, {});

// Group items that share a key. fromEntries cannot do this because
// duplicate keys overwrite each other, so reduce is the right tool.
export const groupByType = (list) =>
  list.reduce((acc, item) => {
    (acc[item.type] ??= []).push(item);
    return acc;
  }, {});
