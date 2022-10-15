import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const store = configureStore({ reducer: Reducer });

store.subscribe(() => store.getState());

export { store };
