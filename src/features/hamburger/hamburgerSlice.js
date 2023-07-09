import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers: {
        openHamburger: (state, action) => {
            state.isOpen = true;
        },
        closeHamburger: (state, action) => {
            state.isOpen = false;
        },
    }
});

export const {openHamburger, closeHamburger } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;