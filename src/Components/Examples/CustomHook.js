import React, { useEffect, useState } from "react";

const useCustomHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Some custom logic here
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return [ data, loading ]
};

export default useCustomHook;
