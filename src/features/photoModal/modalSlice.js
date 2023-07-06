import { createSlice } from "@reduxjs/toolkit";
import { photoAlbum } from '../../../data';

const initialState = {
    isOpen: false,
    singlePhoto: {},
    allPhoto: photoAlbum,
};

const modalSlice = createSlice({
    name: 'photoModal',
    initialState,
    reducers: {
        openModal: (state, {payload}) => {
            state.isOpen = true;
            const single = state.allPhoto.filter((item) => item.id === payload);
            state.singlePhoto = single;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
            console.log(action);
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;