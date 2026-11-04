import React from "react";
import useFetch from "./useFetch";

const URL = "https://jsonplaceholder.typicode.com/users";

const UsersFetchDemo = () => {
  const { data: users, loading, error } = useFetch(URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersFetchDemo;
