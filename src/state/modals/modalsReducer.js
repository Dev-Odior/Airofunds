import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openNavModal: false,
  openSidebar: false,
  disclaimer: false,
};

const modalsHandler = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleModal: (state, _) => {
      state.openNavModal = !state.openNavModal;
    },
    toggleSidebar: (state, _) => {
      state.openSidebar = !state.openSidebar;
    },
    toggleDisclaimer: (state, _) => {
      state.disclaimer = !state.disclaimer;
    },
  },
});

export const { toggleModal, toggleSidebar, toggleDisclaimer } =
  modalsHandler.actions;
export default modalsHandler.reducer;
