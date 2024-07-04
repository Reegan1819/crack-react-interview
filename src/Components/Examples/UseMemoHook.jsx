import React, { useEffect } from "react";

const UseMemoHook = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const [profileInfo, setProfileInfo] = React.useState({
    name: "John Doe",
    age: 25,
    email: "reegan@getDefaultNormalizer.com",
    address: {
      present: {
      city: "New York",
      country: "USA",
      },
    },
    permanent: {
      city: "New York",
      country: "USA",
    },
  });

  //change city in address

  const changeCity = () => {
    setProfileInfo({
      ...profileInfo,
      address: {
        ...profileInfo.address,
        present: {
          ...profileInfo.address.present,
          city: "San Francisco",
        },
      },
    });
  }

 const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }
  

  const increment = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const increment2 = React.useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const isEven = React.useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  const isEven2 = React.useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count2 % 2 === 0;
  }, [count2]);

  return (
    <div>
      <h1>Count 1: {count}</h1>
      <button onClick={increment}>Increment 1</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <h1>Count 2: {count2}</h1>
      <button onClick={increment2}>Increment 2</button>
      <span>{isEven2 ? "Even" : "Odd"}</span>
    </div>
  );
};

export default UseMemoHook;
