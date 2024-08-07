import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./Reducers/rootReducers";

const store  = configureStore({
   reducer: rootReducers,
});

export default store;