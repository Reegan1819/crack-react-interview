import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Reducers/CounterReducer";
import { fetchDataRequest } from "../Redux/ReduxSaga/Action/CounterAction";
import axios from "axios";

const Helper = () => {
  const dispatch = useDispatch();
  const getCount = useSelector((state) => state.Counter.count);

  const cont = useSelector((state) => console.log("state", state));

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  return (
    <div>
      <h1>Count: {getCount}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Helper;
