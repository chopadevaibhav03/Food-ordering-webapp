import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "../utils/reduxSlice/cartSlice"
import { combineReducers } from "redux";


const reducer = combineReducers({
    // here we will be adding reducers
    cart:cartreducer,
  })

const appStore=configureStore({
    reducer,
});

export default appStore;