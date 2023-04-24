import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});