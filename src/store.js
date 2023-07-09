import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/photoModal/modalSlice";
import themeReducer from './features/theme/themeSlice';
import hamburgerReducer from './features/hamburger/hamburgerSlice';

export const store = configureStore({
    reducer: {
        photoModal: modalReducer,
        theme: themeReducer,
        hamburger: hamburgerReducer,
    },
});