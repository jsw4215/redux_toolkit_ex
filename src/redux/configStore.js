import { configureStore } from "@reduxjs/toolkit";
import words from "./modules/words";

const store = configureStore({ reducer: {words} });

export default store;
