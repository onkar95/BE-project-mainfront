import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";
import productReducer from "./Reducers/ProductSlice";
import ReservReducer from "./Reducers/ReservSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        reserve: ReservReducer
    },
});