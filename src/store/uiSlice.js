import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false, //at the start the window is hidden
    },
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true; //Open the window
        },
        closeModal: (state) => {
            state.isModalOpen = false; //Closes the window
        }
    }

});
//exporting actions for react coiuld call them
export const {openModal, closeModal} = uiSlice.actions;

//exporting the reducer itself, so that we can connect it to the memory
export default uiSlice.reducer