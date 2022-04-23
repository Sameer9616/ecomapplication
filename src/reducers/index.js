//jshint esversion: 9
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import fetchDataReducer from "./fetchDataReducer";

const rootReducer = combineReducers({
    productsData: fetchDataReducer,
    cart: cartReducer,
});

export default rootReducer;
