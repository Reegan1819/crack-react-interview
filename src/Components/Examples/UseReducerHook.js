import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  error: "",
  post: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: null,
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "FETCH_SUCCESS", payload: json });
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  useEffect(() => {
    fetchData();
  }, [])
  

  console.log(state);

  const post = state?.post;

  return (
    <div>
      <h1>UseReducer Hook</h1>
      {state?.loading ? (
        "Loading..."
      ) : (
        <div>
          <ul>
            {post?.map((post) => (
              <li key={post?.id}>{post?.title}</li>
            ))}
          </ul>
        </div>
      )}
      {state.error ? state.error : null}

      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default UseReducerHook;
