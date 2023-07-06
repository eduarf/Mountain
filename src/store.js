import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/photoModal/modalSlice";

export const store = configureStore({
    reducer: {
        photoModal: modalReducer,
    },
});