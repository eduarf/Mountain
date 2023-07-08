import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: '',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, {payload}) => {
            const htmlElement = document.documentElement;
            htmlElement.setAttribute('theme-mode', payload);
            state.theme = payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;